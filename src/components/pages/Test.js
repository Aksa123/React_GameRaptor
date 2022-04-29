import { useParams } from "react-router-dom"

function Test() {
    let params = useParams()
    let slug = params.slug
    return ( 
        <div>
            Hello, your slug is {slug}
        </div>
    )
       
}


export default Test