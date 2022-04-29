import React from "react"
import "../static/Header.css"
import search_icon from "../static/search.png"
import { Link } from "react-router-dom"

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuActive: false,
            deactivateHeaderMenu: props.deactivateHeaderMenu
        }
        this.gamingSubItems = [
            {
                id: 1,
                name: "News",
                link: "article"
            },
            {
                id: 2,
                name: "Features"
            },
            {
                id: 3,
                name: "Previews"
            },
            {
                id: 4,
                name: "Reviews"
            },
            {
                id: 5,
                name: "Opinions"
            }
        ]
        this.updateMenuActive = this.updateMenuActive.bind(this)
    }

    static getDerivedStateFromProps(props, state){
        if (props.deactivateHeaderMenu !== state.deactivateHeaderMenu) {
            return {menuActive: false}
        }
    }

    updateMenuActive() {
        console.log("click")
        this.setState({menuActive: !this.state.menuActive})
    }
    
    render() {
        return (
            <header id="header" >
                <div id="header-content" className="major-body">
                    <div className="header-item" id="home">
                        <Link to="/" className="header-item-link">Game<span id="raptor">Raptor</span></Link>
                    </div>
                    <div id="menu">
                        <div id="menu-button-container" className="header-item">
                            <button id="menu-button"  onClick={this.updateMenuActive}>Menu</button>
                        </div>
                        <div id="menu-scroll" className={`${this.state.menuActive ? "menu-scroll-open" : "menu-scroll-close"}`} >
                            <div className="header-item">
                                <a className="header-item-link"><i className="bi bi-chevron-compact-left header-menu-arrow"></i>Games</a>
                                <div className="header-item-dropdown">
                                    <Link className="header-item-dropdown-item" to="/games/newest">Newest</Link>
                                    <Link className="header-item-dropdown-item" to="/games/popular">Most Popular</Link>
                                    <Link className="header-item-dropdown-item" to="/games/coming-soon">Coming Soon</Link>
                                </div>
                            </div>
                            <div className="header-item">
                                <a className="header-item-link"><i className="bi bi-chevron-compact-left header-menu-arrow"></i>Genres</a>
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
                                <a className="header-item-link"><i className="bi bi-chevron-compact-left header-menu-arrow"></i>Platforms</a>
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
                        </div>
                    </div>
                    <button id="search">
                        <img id="search-icon" src={search_icon} alt="search icon" />
                    </button>
                </div>
                <div id="menu-path" className="display-none">Home / </div>
            </header>
        )
        
    }
}


export default Header