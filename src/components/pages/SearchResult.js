import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import Paginator from "../Paginator";
import Article from "../Article"
import {getGamesListURL} from "../../apiData"
import "../../static/Paginator.css"


function SearchResult() {
    // api-url.com?filterKey=filterValue
    const size = 9                              // number of items per page
    let params = useParams()
    let query = params.query
    let page = parseInt(params.page) || 1
    let [allData, setAllData] = useState({count: 0, results: []})

    useEffect(() => {
        let menuText = "Search"
        async function getGamesData() {
            let url = getGamesListURL(page, size, "-updated", "search", query)
            url.searchParams.append("search_precise", 1)
            url.searchParams.append("search_exact", 1)
            try {
                let res = await fetch(url).then(data => data.json())
                res.results.forEach(item => item.menu = menuText)
                setAllData(res)
            }
            catch(e){
                console.log(e)
                alert("Error when fetching data. Plz check console.")
            }
        }        
        getGamesData()
    }, [query, page])

    

  

    return (
        <>
            {(allData && allData.results.length > 0) ? <Article articleData={allData.results} articleTitle={`Search results for "${query}"`} /> : null}
            {<Paginator activePage={page} itemsCount={allData.count} pageSize={size} />}
        </>
    )
}

export default SearchResult