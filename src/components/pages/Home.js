import React from "react";
import Banner from "../Banner";
import Article from "../Article";
import ArticleExtra from "../ArticleExtra";
import HotGame from "../HotGame";
import "../../static/Home.css"
import {getGamesListURL} from "../../apiData.js"


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.key = "84350cd8a8a7472a8cbc7dc14aa547b3"
        this.url = new URL("https://api.rawg.io/api/games")
        this.viewMoreArticles = this.viewMoreArticles.bind(this)
        this.state = {
            bannerData: [],
            articleData: [],
            hotData: [],
        }
        this.page = 1           // no need to be in state 
        this.articleTitle = props.articleTitle
    }
        

    getLatestGames(page=1, size=9) {
        let url = getGamesListURL(page, size, "-dates")
        fetch(url)
        .then(data => data.json())
        .then(data => {
            data.results.forEach((item, index) => {
                item.menu = "News"
            })
            if (page===1){
                this.setState({
                    bannerData: data.results.slice(0,3),
                    articleData: data.results.slice(3,)
                })
            }
            else{
                this.setState(prevState => ({
                    articleData: prevState.articleData.concat(data.results)
                }))
            }
        })
        .catch(error => {
            alert(error)
            return error
        })
    }

    getHotGames() {
        let url = getGamesListURL(1, 8, "-metacritic")
        fetch(url)
        .then(data => data.json())
        .then(data => {
            this.setState({hotData: data.results})
        })
        .catch(error => alert(error))
    }

    viewMoreArticles() {
        this.page++
        this.getLatestGames(this.page)
    }

    componentDidMount() {
        this.getLatestGames()
        this.getHotGames()
    }

    render() {
        let banner = this.state.bannerData.length > 0 ? <Banner bannerData={this.state.bannerData} /> : null
        let article = this.state.articleData.length > 0 ? <Article articleData={this.state.articleData} articleTitle={this.articleTitle} /> : null
        let hot = this.state.hotData.length > 0 ? <HotGame hotData={this.state.hotData} /> : null
        return (
            <>
                {banner}
                {article}
                <div className="view-more-article">
                    <button onClick={this.viewMoreArticles} className="view-more-article-button">View more articles</button>
                </div>
                {hot}
            </>
        )
    }
}


export default Home