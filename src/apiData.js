const key = "84350cd8a8a7472a8cbc7dc14aa547b3"

function getGamesListURL(page=1, size=1, ordering="-added", filterKey=null, filterValue=null) {
    let url = new URL("https://api.rawg.io/api/games")
    url.searchParams.append("key", key)
    url.searchParams.append("ordering", ordering)
    url.searchParams.append("page_size", size)
    url.searchParams.append("page", page)
    if (filterKey !== null && filterValue !== null){
        url.searchParams.append(filterKey, filterValue)
    }

    return url
}

function getAllGenresURL(){
    let url = new URL("https://api.rawg.io/api/genres")
    url.searchParams.append("key", key)
    return url
}

function GenreList(){
    let list = ["action","indie","adventure","role-playing-games-rpg","strategy","shooter","casual","simulation","puzzle","arcade","platformer","racing","massively-multiplayer","sports","fighting","family","board-games","educational","card"]
    return list
}

function PlatformList() {
    let list = [{ id: 111, name: "3DO", slug: "3do" }, 
    { id: 21, name: "Android", slug: "android" }, 
    { id: 41, name: "Apple II", slug: "apple-ii" }, 
    { id: 23, name: "Atari 2600", slug: "atari-2600" }, 
    { id: 31, name: "Atari 5200", slug: "atari-5200" }, 
    { id: 28, name: "Atari 7800", slug: "atari-7800" }, 
    { id: 25, name: "Atari 8-bit", slug: "atari-8-bit" }, 
    { id: 22, name: "Atari Flashback", slug: "atari-flashback" }, 
    { id: 46, name: "Atari Lynx", slug: "atari-lynx" }, 
    { id: 34, name: "Atari ST", slug: "atari-st" }, 
    { id: 50, name: "Atari XEGS", slug: "atari-xegs" }, 
    { id: 55, name: "Classic Macintosh", slug: "macintosh" }, 
    { id: 166, name: "Commodore / Amiga", slug: "commodore-amiga" }, 
    { id: 106, name: "Dreamcast", slug: "dreamcast" }, 
    { id: 26, name: "Game Boy", slug: "game-boy" }, 
    { id: 24, name: "Game Boy Advance", slug: "game-boy-advance" }, 
    { id: 43, name: "Game Boy Color", slug: "game-boy-color" }, 
    { id: 105, name: "GameCube", slug: "gamecube" }, 
    { id: 77, name: "Game Gear", slug: "game-gear" }, 
    { id: 167, name: "Genesis", slug: "genesis" }, 
    { id: 3, name: "iOS", slug: "ios" }, 
    { id: 112, name: "Jaguar", slug: "jaguar" }, 
    { id: 6, name: "Linux", slug: "linux" }, 
    { id: 5, name: "macOS", slug: "macos" }, 
    { id: 12, name: "Neo Geo", slug: "neogeo" }, 
    { id: 49, name: "NES", slug: "nes" }, 
    { id: 8, name: "Nintendo 3DS", slug: "nintendo-3ds" }, 
    { id: 83, name: "Nintendo 64", slug: "nintendo-64" }, 
    { id: 9, name: "Nintendo DS", slug: "nintendo-ds" }, 
    { id: 13, name: "Nintendo DSi", slug: "nintendo-dsi" }, 
    { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" }, 
    { id: 4, name: "PC", slug: "pc" }, 
    { id: 27, name: "PlayStation", slug: "playstation1" }, 
    { id: 15, name: "PlayStation 2", slug: "playstation2" }, 
    { id: 16, name: "PlayStation 3", slug: "playstation3" }, 
    { id: 18, name: "PlayStation 4", slug: "playstation4" }, 
    { id: 187, name: "PlayStation 5", slug: "playstation5" }, 
    { id: 17, name: "PSP", slug: "psp" }, 
    { id: 19, name: "PS Vita", slug: "ps-vita" }, 
    { id: 117, name: "SEGA 32X", slug: "sega-32x" }, 
    { id: 119, name: "SEGA CD", slug: "sega-cd" }, 
    { id: 74, name: "SEGA Master System", slug: "sega-master-system" }, 
    { id: 107, name: "SEGA Saturn", slug: "sega-saturn" }, 
    { id: 79, name: "SNES", slug: "snes" }, 
    { id: 171, name: "Web", slug: "web" }, 
    { id: 11, name: "Wii", slug: "wii" }, 
    { id: 10, name: "Wii U", slug: "wii-u" }, 
    { id: 80, name: "Xbox", slug: "xbox-old" }, { id: 14, name: "Xbox 360", slug: "xbox360" },{id: 1, name: "Xbox One", slug: "xbox-one"} ]
    return list
}

function getGameDetailURL(gameSlug){
    let url = new URL("https://api.rawg.io/api/games/"+gameSlug)
    url.searchParams.append("key", key)
    return url
}

function getGameScreenshotURL(gameSlug) {
    let url = new URL(`https://api.rawg.io/api/games/${gameSlug}/screenshots`)
    url.searchParams.append("key", key)
    return url
}

// browsePath: developers, publishers, genres, platforms
function getBrowseListURL(browsePath, page, size){
    let url = new URL(`https://api.rawg.io/api/${browsePath}`)
    url.searchParams.append("key", key)
    url.searchParams.append("page_size", size)
    url.searchParams.append("page", page)
    return url
}

function getURLWithCustomPath(path, size, page){
    let url = new URL(`https://api.rawg.io/api/${path}`)
    url.searchParams.append("key", key)
    url.searchParams.append("page_size", size)
    url.searchParams.append("page", page)
    return url
}

export {getGamesListURL, getAllGenresURL, GenreList, PlatformList, getGameDetailURL, getGameScreenshotURL, getBrowseListURL, getURLWithCustomPath }