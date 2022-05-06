import React, {useState, useEffect} from "react"
import "../static/Header.css"
import search_icon from "../static/search.png"
import { Link } from "react-router-dom"
import HeaderSearchForm from "./HeaderSearchForm"
import { openOrCloseSearchPopup } from "../../src/commonFunctions"

function Header({clickElement}) {
    let [menuActive, setMenuActive] = useState(false)

    useEffect(() => {
        if(clickElement !== null && !clickElement.classList.contains("menu-stay")){
            setMenuActive(false)
        }
    }, [clickElement])

    function changeMenuActive(){
        setMenuActive(!menuActive)
    }

    return (
        <header id="header" >
            <div id="header-content" className="major-body">
                <div className="header-item" id="home">
                    <Link to="/" className="header-item-link">Game<span id="raptor">Raptor</span></Link>
                </div>
                <div id="menu">
                    <div id="menu-button-container" className="header-item">
                        <button id="menu-button" className="menu-stay" style={{backgroundColor: `${menuActive ? "yellowgreen" : ""}`}}  onClick={() => changeMenuActive()}>Menu</button>
                    </div>
                    <div id="menu-scroll" className={`${menuActive ? "menu-scroll-open" : "menu-scroll-close"}`} >
                        <div className="header-item">
                            <span className="header-item-link menu-stay"><i className="bi bi-chevron-compact-left header-menu-arrow"></i>Games</span>
                            <div className="header-item-dropdown">
                                <Link className="header-item-dropdown-item" to="/games/newest">Newest</Link>
                                <Link className="header-item-dropdown-item" to="/games/popular">Most Popular</Link>
                                <Link className="header-item-dropdown-item" to="/games/coming-soon">Coming Soon</Link>
                            </div>
                        </div>
                        <div className="header-item">
                            <span className="header-item-link menu-stay"><i className="bi bi-chevron-compact-left header-menu-arrow"></i>Genres</span>
                            <div className="header-item-dropdown">
                                <Link className="header-item-dropdown-item" to="/genres/action">Action</Link>
                                <Link className="header-item-dropdown-item" to="/genres/adventure">Adventure</Link>
                                <Link className="header-item-dropdown-item" to="/genres/puzzle">Puzzle</Link>
                                <Link className="header-item-dropdown-item" to="/genres/racing">Racing</Link>
                                <Link className="header-item-dropdown-item" to="/genres/role-playing-games">RPG</Link>
                                <Link className="header-item-dropdown-item" to="/genres/sports">Sports</Link>
                                <Link className="header-item-dropdown-item" to="/genres/strategy">Strategy</Link>
                            </div>
                        </div>
                        <div className="header-item">
                            <span className="header-item-link menu-stay"><i className="bi bi-chevron-compact-left header-menu-arrow"></i>Platforms</span>
                            <div className="header-item-dropdown">
                                <Link className="header-item-dropdown-item" to="/platforms/pc">PC</Link>
                                <Link className="header-item-dropdown-item" to="/platforms/playstation-5">PlayStation 5</Link>
                                <Link className="header-item-dropdown-item" to="/platforms/playstation-4">PlayStation 4</Link>
                                <Link className="header-item-dropdown-item" to="/platforms/xbox-one">Xbox One</Link>
                                <Link className="header-item-dropdown-item" to="/platforms/xbox-360">Xbox 360</Link>
                                <Link className="header-item-dropdown-item" to="/platforms/nintendo-switch">Nintendo Switch</Link>
                                <Link className="header-item-dropdown-item" to="/platforms/ios">iOS</Link>
                                <Link className="header-item-dropdown-item" to="/platforms/android">Android</Link>
                            </div>
                        </div>
                        <div className="header-item">
                            <span className="header-item-link menu-stay"><i className="bi bi-chevron-compact-left header-menu-arrow"></i>Browse</span>
                            <div className="header-item-dropdown">
                                <Link className="header-item-dropdown-item" to="/browse/genres">Genres</Link>
                                <Link className="header-item-dropdown-item" to="/browse/platforms">Platforms</Link>
                                <Link className="header-item-dropdown-item" to="/browse/developers">Developers</Link>
                                <Link className="header-item-dropdown-item" to="/browse/publishers">Publishers</Link>
                            </div>
                        </div>
                        <button id="search" className="header-item menu-stay" onClick={() => openOrCloseSearchPopup(true)} >
                            <img id="search-icon" className="menu-stay" src={search_icon} alt="search icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div id="search-popup" className="search-popup-flex search-popup-inactive">
                <HeaderSearchForm />
                <button id="search-popup-cancel" onClick={() => openOrCloseSearchPopup(false)}><i className="bi bi-x-lg"></i></button>
            </div>
            <div id="menu-path" className="display-none">Home / </div>
        </header>
    )
}



export default Header