import { useState, useEffect } from "react";

function Paginator(props) {
    let [activePage, setActivePage] = useState(props.activePage)
    let numbersCount = 5
    let numbersMin = 1
    let numbersMax = 5

    function changePageNumbers() {
        
    }

    return (
        <>
            <div className="paginator">
                <div className="page-item">First</div>
                <div className="page-item">...</div>
                <div className="page-item">1</div>
                <div className="page-item">2</div>
                <div className="page-item">3</div>
                <div className="page-item">4</div>
                <div className="page-item">5</div>
                <div className="page-item">...</div>
                <div className="page-item">Last</div>
            </div>
        </>
    )
}


export default Paginator