import Header from "../Header";
import Footer from "../Footer";
import {Outlet} from "react-router-dom"
import "../../static/Content.css"

function Base({clickElement}) {

    return (
        <>
            <Header clickElement={clickElement} />
            <div id="content" className="major-body">
                <Outlet />
            </div>
            <Footer />
            <div id="overlay" className="overlay-z-index"></div>
        </>
    )
}


export default Base