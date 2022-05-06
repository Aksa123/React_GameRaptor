// HEADER

// true open, false close
function openOrCloseSearchPopup(open){
    let superContainerElement = document.querySelector("#super-container")
    let searchPopupElement = document.querySelector("#search-popup")
    let overlayElement = document.querySelector("#overlay")
    if (superContainerElement !== null && searchPopupElement !== null && overlayElement !== null) {
        if (open === true){
            searchPopupElement.classList.toggle("search-popup-inactive", false)
            searchPopupElement.classList.toggle("search-popup-active", true)
            overlayElement.classList.toggle("overlay-active", true)
        }
        else{
            searchPopupElement.classList.toggle("search-popup-inactive", true)
            searchPopupElement.classList.toggle("search-popup-active", false)
            overlayElement.classList.toggle("overlay-active", false)
        }
    }
}


export {openOrCloseSearchPopup}