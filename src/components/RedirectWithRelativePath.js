import { useParams } from "react-router-dom";

function RedirectWithRelativePath(){
    let params = useParams()
    let path = params.path
    console.log(params)

    return <div>yoyoyo</div>
}


export default RedirectWithRelativePath