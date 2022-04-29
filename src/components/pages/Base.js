import {useState, useEffect} from "react";
import Header from "../Header";
import Footer from "../Footer";
import {Outlet} from "react-router-dom"
import "../../static/Content.css"

function Base() {
    let [outletPage, setOutletPage] = useState(<Outlet />)
    let [deactivateHeaderMenu, setDeactivateHeaderMenu] = useState(true)

    useEffect(() => {
        setDeactivateHeaderMenu((prev) => prev+1)
        console.log(outletPage)
    }, [outletPage])
    
    return (
        <>
            <Header deactivateHeaderMenu={deactivateHeaderMenu} />
            <div id="content" className="major-body">
                {outletPage}
            </div>
            <Footer />
        </>
    )
}


export default Base