import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {getBrowseListURL} from "../../apiData" 
import Paginator from "../Paginator";
import "../../static/Browse.css"

function BrowseBase({browsePath, zzz}) {
    let params = useParams()
    let page = parseInt(params.page)
    let [data, setData] = useState({count: 0, results: []})
    const size = 10

    useEffect(() => {
        let url = getBrowseListURL(browsePath, page, size)
        async function getData() {
            try{
                let res = await fetch(url).then((data) => data.json())
                setData(res)
            }
            catch(e){
                console.log(e)
                alert("Error when fetching data. Plz check console.")
            }
        }
        getData()
    }, [page, browsePath])


    return  <>
    <div className="browse">
        <div className="browse-header">List of {browsePath}</div>
        <div className="browse-list">
            {data.results.map(item => <Link key={item.id} to={`/${browsePath}/${item.id}`} ><div className="browse-item">{item.name}</div></Link> )}
        </div>
    </div>
    {<Paginator activePage={page} itemsCount={data.count} pageSize={size}  />}
    </>
}

export default BrowseBase