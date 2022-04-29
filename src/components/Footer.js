import React from "react";
import {Link} from "react-router-dom"
import "../static/Footer.css"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div id="footer-container">
                    <div id="footer-menu">
                        <Link to="/about"><span className="footer-menu-item">About</span></Link> | <a href="http://156.67.220.126/" target="_blank"> <span className="footer-menu-item">Blog</span></a> | <a href="#"><span className="footer-menu-item">Contact</span></a>
                    </div>
                    <div id="footer-text">
                        GameRaptor is a clone of <a href="https://techraptor.net" target="_blank" style={{color: "yellowgreen"}}>Techraptor</a>, made as a personal project. Visit the <Link to="/about"><i style={{color: "yellowgreen"}}>About</i></Link>  page for more detail (*￣▽￣)b
                    </div>
                    <div id="footer-media">
                        <a href="https://youtube.com" className="footer-media-item"><i className="bi bi-youtube"></i></a>
                        <a href="https://instagram.com" className="footer-media-item"><i className="bi bi-instagram"></i></a>
                        <a href="https://facebook.com" className="footer-media-item"><i className="bi bi-facebook"></i></a>
                        <a href="https://discord.com" className="footer-media-item"><i className="bi bi-discord"></i></a>
                        <a href="https://twitter.com" className="footer-media-item"><i className="bi bi-twitter"></i></a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer