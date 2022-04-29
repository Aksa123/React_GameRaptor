import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import Banner from "../Banner"
import Article from "../Article"
import {getGamesListURL} from "../../apiData"
import "../../static/Paginator.css"


function MenuBase({filterKey, filterValue=null, ordering="-updated", articleTitle, menu=null}) {
    // api-url.com?filterKey=filterValue
    const pagesCount = 6
    const pageActiveMid = 3                     // min page value when the active page is in the "middle" of the visible page pack
    // const pageMax = 99
    const size = 9                              // number of items per page
    const slug = useParams().slug || null
    let [page, setPage] = useState(1)
    let [allData, setAllData] = useState(null)
    
    
    useEffect(() => {
        let menuText =  menu || filterValue || slug.replace("-", " ")
        let filterValueOrSlug = (filterValue === null ? slug : filterValue)
        function getGamesData() {
            let url = getGamesListURL(page, size, ordering, filterKey, filterValueOrSlug)
            fetch(url)
            .then(data => data.json())
            .then(data => {
                data.results.forEach(item => {item.menu = menuText})
                setAllData(data)
            })
        }        
        getGamesData()
    }, [page, filterKey, filterValue])

    function getPaginator() {
        let pageItems = []
        const pageMax = Math.ceil(allData.count/size) 
        for (let i=1; i<pagesCount+1; i++) {
            let pageValue = i
            if ((page > pageActiveMid) && page < (pageMax - pageActiveMid)) {
                pageValue = page + i - pageActiveMid
            }
            else if (page >= (pageMax - pageActiveMid)) {
                pageValue = pageMax - pagesCount + i
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
                {(page > pageActiveMid && pageItems.length === pagesCount) ? <button className="page" onClick={changePage} id="page-1" value="1" >First</button> : null}
                {pageItems.map(item => {
                    return <button key={item.id} className={`page ${item.isActive ? 'page-active' : ''}`} onClick={changePage} id={item.id} value={item.value} >{item.value}</button>
                })}
                { page < (pageMax - pageActiveMid) ? <button className="page" onClick={changePage} id={`page-${pageMax}`} value={pageMax} >Last</button> : null }
            </div>) 
    }

    function changePage(e) {
        let target = e.target
        let newPage = parseInt(target.value)
        console.log(newPage)
        if (newPage !== page) {
            setPage(newPage)
        }
    }

    return (
        <>
            {(allData && allData.results.length > 0) ? <Banner bannerData={allData.results.slice(0,3)} /> : <div className="no-games-found">No games found :(</div>}
            {(allData && allData.results.length > 0) ? <Article articleData={allData.results.slice(3,)} articleTitle={articleTitle} /> : null}
            {(allData && allData.count > 9) ? getPaginator() : null }
        </>
    )
}

export default MenuBase