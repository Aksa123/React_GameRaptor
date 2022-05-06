import {useNavigate} from "react-router-dom"
import {useState} from "react"
import search_icon from "../static/search.png"
import {openOrCloseSearchPopup} from "../../src/commonFunctions"

function HeaderSearchForm(){
    let navigate = useNavigate();
    let [searchValue, setSearchValue] = useState("")

    function redirectToSearchResultPage(event) {
      event.preventDefault();
      setSearchValue(searchValue.trim())
      navigate(`/search/${searchValue.trim()}`, {replace: true});
      openOrCloseSearchPopup(false)
    }

    function updateSearchValue(e){
        let newVal = e.target.value
        setSearchValue(newVal)
    }

    return <>
        <form id="search-popup-form" onSubmit={redirectToSearchResultPage} >
            <input id="search-popup-input" value={searchValue} type="text" placeholder="Search a game here..." onChange={(e) => updateSearchValue(e)} />
            <button id="search-popup-submit" type="submit"><img id="search-popup-submit-img" src={search_icon} alt="search icon" /></button>
        </form>
    </>
}


export default HeaderSearchForm