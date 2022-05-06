import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import {getGameDetailURL, getGameScreenshotURL} from "../../apiData"
import "../../static/GameDetail.css"

function GameDetail() {
    const params = useParams()
    const gameSlug = params.gameSlug
    let [gameDetail, setGameDetail] = useState(null)
    let [gameScreenshotData, setGameScreenshotData] = useState([])
    let [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0)

    useEffect(() => {
        getGameDetail()
        getGameScreenshot()
    }, [])

    useEffect(() => {
        let img = document.querySelector(`#img-${activeScreenshotIndex}`)
        if (img !== null) {
            let bounds = img.getBoundingClientRect()
            let midWidth = bounds.left + 50         // 50px is half the width of the item
            const itemsNeededToScrollTheRoll = 3
            const screenshotRollElement = document.querySelector(".game-screenshot-roll-extra")
            const midViewportWidth = window.innerWidth/2
            if (midWidth < midViewportWidth) {
                screenshotRollElement.scrollBy(-100*itemsNeededToScrollTheRoll, 0)
            }
            else{
                screenshotRollElement.scrollBy(100*itemsNeededToScrollTheRoll, 0)
            }
        }
    }, [activeScreenshotIndex])

    function getGameDetail() {
        let url = getGameDetailURL(gameSlug)
        fetch(url)
        .then(data => data.json())
        .then(data => {
            setGameDetail(data)
        })
        .catch(e => alert(e))
    }

    function getGameScreenshot() {
        let url = getGameScreenshotURL(gameSlug)
        fetch(url)
        .then(data => data.json())
        .then(data => {
            setGameScreenshotData(data.results)
        })
        .catch(e => alert(e))
    }

    function getDescriptionHTML(textHTML){
        let parser = new DOMParser()
        let desc = parser.parseFromString((textHTML.replace(/\n/g, "\r\n")), "text/html")
        return desc.body.textContent
    }

    function getPrettyReleaseDate(date) {
        if (date){
            let dateObj = new Date(date)
            dateObj = dateObj.toLocaleDateString(undefined, {day: "numeric", month: "short", year: "numeric"})
            return dateObj
        }
        else{
            return "TBA"
        }
    }

    function slideScreenshotRoll(directionInt) {
        setActiveScreenshotIndex((prevIndex) => {
            let newIndex = prevIndex + directionInt
            if (newIndex < 0){
                newIndex = gameScreenshotData.length -1
            }
            else if (newIndex > gameScreenshotData.length -1){
                newIndex = 0
            }
            return newIndex
        })
    }

    return (
        <>
            {gameDetail !== null ?  
            <div className="game-detail-container">
                <div className="game-background">
                    <img className="game-background-image" src={gameDetail.background_image} />
                    <div className="game-title">
                        {gameDetail.name}
                    </div>
                </div>
                <div className="game-info">
                    <div className="game-info-item">
                        <div className="game-info-item-name">Developers</div>
                        <div className="game-developer game-info-item-content">{gameDetail.developers.map((item, index) => {
                            if (index < gameDetail.developers.length -1) {
                                return <span key={item.id}><Link  to={`/developers/${item.slug}`} >{item.name}</Link>, </span>
                            }
                            else{
                                return <span key={item.id}><Link  to={`/developers/${item.slug}`} >{item.name}</Link></span>
                            }
                        })}</div>
                    </div>
                    <div className="game-info-item">
                    <div className="game-info-item-name">Publishers</div>
                        <div className="game-publisher game-info-item-content">{gameDetail.publishers.map((item, index) => {
                            if (index < gameDetail.publishers.length -1) {
                                return <span key={item.id}><Link  to={`/publishers/${item.slug}`} >{item.name}</Link>, </span>
                            }
                            else{
                                return <span key={item.id}><Link  to={`/publishers/${item.slug}`} >{item.name}</Link></span>
                            }
                        })}</div>
                    </div>
                    <div className="game-info-item">
                        <div className="game-info-item-name">Platforms</div>
                        <div className="game-platform game-info-item-content">{gameDetail.platforms.map((item, index) => {
                            if (index < gameDetail.platforms.length -1) {
                                return <span key={item.platform.id}><Link  to={`/platforms/${item.platform.id}`} >{item.platform.name}</Link>, </span>
                            }
                            else{
                                return <span key={item.platform.id}><Link  to={`/platforms/${item.platform.id}`} >{item.platform.name}</Link></span>
                            }
                        })}</div>
                    </div>
                    <div className="game-info-item">
                        <div className="game-info-item-name">Genres</div>
                        <div className="game-genre game-info-item-content">{gameDetail.genres.map((item, index) => {
                            if (index < gameDetail.genres.length -1) {
                                return <span key={item.id}><Link  to={`/genres/${item.slug}`} >{item.name}</Link>, </span>
                            }
                            else{
                                return <span key={item.id}><Link  to={`/genres/${item.slug}`} >{item.name}</Link></span>
                            }
                        })}</div>
                    </div>
                    <div className="game-info-item">
                        <div className="game-info-item-name">Release Date</div>
                        <div className="game-release-date game-info-item-content">{getPrettyReleaseDate(gameDetail.released) || "TBA"}</div>
                    </div>
                    <div className="game-info-item">
                        <div className="game-info-item-name">Rating</div>
                        <div className="game-rating game-info-item-content" style={{color: `hsl(${gameDetail.metacritic}, 100%, 50%)`}}>{gameDetail.metacritic || "N/A"}</div>
                    </div>
                </div>
                <div className="game-description">
                    <div className="game-description-header">Description</div>
                    <div className="game-description-content">{getDescriptionHTML(gameDetail.description)}</div>
                </div>
                <div className="game-screenshot">
                    <div className="game-description-header">Screenshots</div>
                    {gameScreenshotData.length > 0 ? 
                    <>
                        <div className="game-screenshot-display">
                            <img className="game-screenshot-display-img" src={gameScreenshotData[activeScreenshotIndex].image} alt="displayed-image" />
                        </div>
                        <div className="game-screenshot-roll">
                            <button onClick={() => slideScreenshotRoll(-1)} className="game-screenshot-roll-arrow arrow-left"><i className="bi bi-chevron-compact-left"></i></button>
                            <button onClick={() => slideScreenshotRoll(1)} className="game-screenshot-roll-arrow arrow-right"><i className="bi bi-chevron-compact-right"></i></button>
                            <div className="game-screenshot-roll-extra">
                                {gameScreenshotData.map((item, index) => {
                                    return <img id={`img-${index}`} onClick={() => setActiveScreenshotIndex(index)} key={item.id} className={`game-screenshot-roll-item ${index===activeScreenshotIndex ? "game-screenshot-roll-item-active" : ""}`} src={item.image} alt="roll-images" />
                                })}
                            </div>
                        </div>
                    </>
                    : <div className="game-screenshot-unavailable">No screenshots available</div> }
                </div>
            </div> 
            : null}
        </>
    )
}

export default GameDetail