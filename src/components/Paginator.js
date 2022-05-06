import {useState, useEffect} from "react"
import {Link} from "react-router-dom"


function Paginator({activePage, itemsCount, pageSize}) {
    const pageActiveMid = 3
    const pagesDisplayed = 6                        // number of displayed pages in the paginator
    const pageMax = Math.ceil(itemsCount/pageSize) 
    let pageItems = []
    let [page, setPage] = useState(activePage)
    let path = new URL(window.location).pathname
    let pathWithoutPage = path.split("/").slice(0,3).join("/")

    useEffect(() => {
        setPage(activePage)
    }, [activePage])

    
    for (let i=1; i<pagesDisplayed+1; i++) {
        let pageValue = i
        if ((page > pageActiveMid) && page < (pageMax - pageActiveMid)) {
            pageValue = page + i - pageActiveMid
        }
        else if (page >= (pageMax - pageActiveMid)) {
            pageValue = pageMax - pagesDisplayed + i
        }
        if (pageValue < 1) {
            continue
        }
        else if (pageValue > pageMax ) {
            break
        }
        let pageItem = {
            isActive: (pageValue === page),
            id: `page-${pageValue}`,
            value: pageValue
        }
        pageItems.push(pageItem)
    }
    
    return (
        <div className="paginator">
            {(page > pageActiveMid && pageItems.length === pagesDisplayed) ? <Link to={`${pathWithoutPage}/1`}><button className="page" id="page-1" value="1" >First</button></Link> : null}
            {pageItems.map(item => {
                return <Link key={item.id} to={`${pathWithoutPage}/${item.value}`}><button className={`page ${item.isActive ? 'page-active' : ''}`}  id={item.id} value={item.value} >{item.value}</button></Link>
            })}
            { page < (pageMax - pageActiveMid) ? <Link to={`${pathWithoutPage}/${pageMax}`}><button className="page" id={`page-${pageMax}`} value={pageMax} >Last</button></Link> : null }
        </div>
    )
}


export default Paginator