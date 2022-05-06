import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import Banner from "../Banner"
import Article from "../Article"
import Paginator from "../Paginator";
import {getGamesListURL} from "../../apiData"
import "../../static/Paginator.css"


function MenuBase({filterKey, filterValue=null, ordering="-added", articleTitle, menu=null}) {
    // api-url.com?filterKey=filterValue
    const size = 9                              // number of items per page
    let params = useParams()
    let slug = params.slug || null
    let page = parseInt(params.page) || 1
    let [allData, setAllData] = useState({count: 0, results: []})
    let path = new URL(window.location).pathname
    let pathWithoutPage = path.split("/").slice(0,3).join("/")
    
    useEffect(() => {
        let menuText =  menu || filterValue || "Uncoded"
        let filterValueOrSlug = (filterValue === null ? slug : filterValue)
        let url = getGamesListURL(page, size, ordering, filterKey, filterValueOrSlug)
        console.log(url)
        async function getGamesData() {
            try{
                let res = await fetch(url).then(data => data.json())
                res.results.forEach(item => item.menu = menuText)
                setAllData(res)
            }
            catch(e){
                console.log(e)
                alert("Error when fetching data. Check console for more detail.")
            }
        }
        getGamesData()
    }, [page, filterKey, filterValue])

    return (
        <>
            {(allData && allData.results.length > 0) ? <Banner bannerData={allData.results.slice(0,3)} /> : <div className="no-games-found">No games found :(</div>}
            {(allData && allData.results.length > 0) ? <Article articleData={allData.results.slice(3,)} articleTitle={articleTitle} /> : null}
            {<Paginator activePage={page} itemsCount={allData.count} pageSize={size} path={pathWithoutPage} />}
        </>
    )
}

export default MenuBase