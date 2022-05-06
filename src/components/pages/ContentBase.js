import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import MenuBase from "./MenuBase"
import Paginator from "../Paginator"
import {getURLWithCustomPath} from "../../apiData"

function ContentBase({filterKey, filterValue, ordering="-added", articleTitle, menuText=null, path="games", size=9}) {
    let params = useParams()
    let page = params.page

    useEffect(() => {
        let url = getURLWithCustomPath(path, size, page)
        async function getData(){
            let res = await fetch(url).then((data) => data.json())
            res.results.forEach(item => item.menu=menuText)
        }

    }, [page, filterKey, filterValue])


    return <>
        <MenuBase filterKey={filterKey} filterValue={filterValue} ordering={ordering} articleTitle={articleTitle} menu={menu} />
    
    </>
}