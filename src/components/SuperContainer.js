import {useState} from "react"
import Base from "./pages/Base"
import Home from "./pages/Home"
import Test from "./pages/Test"
import MenuGenreAction from "./pages/MenuGenreAction"
import MenuGenreAdventure from "./pages/MenuGenreAdventure"
import MenuGenrePuzzle from "./pages/MenuGenrePuzzle"
import MenuGenreRacing from "./pages/MenuGenreRacing"
import MenuGenreRPG from "./pages/MenuGenreRPG"
import MenuGenreSports from "./pages/MenuGenreSports"
import MenuGenreStrategy from "./pages/MenuGenreStrategy"
import MenuPlatformPC from "./pages/MenuPlatformPC"
import MenuPlatformPS5 from "./pages/MenuPlatformPS5"
import { MenuPlatformXbox360, MenuPlatformXboxOne, MenuPlatformPS4, MenuPlatformSwitch, MenuPlatformIOS, MenuPlatformAndroid } from "./pages/MenuPlatformOthers"
import MenuBase from "./pages/MenuBase"
import GameDetail from "./pages/GameDetail"
import About from "./pages/About"
import SearchResult from "./pages/SearchResult"
import BrowseBase from "./pages/BrowseBase"
import "../static/SuperContainer.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function SuperContainer() {
    let [clickElement, setClickElement] = useState(null)

    function updateClickElement(e){
        setClickElement(e.target)
    }

    return (
        <div id="super-container" onClick={(e) => updateClickElement(e)}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Base clickElement={clickElement} test="nani" />} >
                        <Route path="" element={<Home articleTitle="Latest in Gaming" />} />
                        <Route path="genres" >
                            <Route path="action" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuGenreAction />} />
                            </Route>
                            <Route path="adventure" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuGenreAdventure />} />
                            </Route>
                            <Route path="puzzle" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuGenrePuzzle />} />
                            </Route>
                            <Route path="racing" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuGenreRacing />} />
                            </Route>
                            <Route path="role-playing-games" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuGenreRPG />} />
                                </Route>
                            <Route path="sports" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuGenreSports />} />
                            </Route>
                            <Route path="strategy" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuGenreStrategy />} />
                            </Route>
                            <Route path=":slug" >
                                <Route path="" element={<Navigate to="1" />}/>
                                <Route path=":page" element={<MenuBase filterKey="genres" articleTitle="Other Genres" menu="Other" />}/>
                            </Route>
                        </Route>
                        <Route path="platforms" >
                            <Route path="pc" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuPlatformPC />} />
                            </Route>
                            <Route path="playstation-5" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuPlatformPS5 />} />
                            </Route>
                            <Route path="playstation-4" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuPlatformPS4 />} />
                                </Route>
                            <Route path="xbox-one" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuPlatformXboxOne />} />
                            </Route>
                            <Route path="xbox-360" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuPlatformXbox360 />} />
                                </Route>
                            <Route path="nintendo-switch" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuPlatformSwitch />} />
                            </Route>
                            <Route path="ios" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuPlatformIOS />} />
                            </Route>
                            <Route path="android" >
                                <Route path="" element={<Navigate to="1"  />} />
                                <Route path=":page" element={<MenuPlatformAndroid />} />
                                </Route>
                            <Route path=":slug" >
                                <Route path="" element={<Navigate to="1"  />} />
                                <Route path=":page" element={<MenuBase filterKey="platforms" articleTitle="Other Platforms"  />} />
                            </Route>
                        </Route>
                        <Route path="test" >
                            <Route path=":slug" element={<Test />} />
                        </Route>
                        <Route path="games" >
                            <Route path="newest" >
                                <Route path="" element={<Navigate to="1"  />} />
                                <Route path=":page" element={<MenuBase filterKey="tba" filterValue="0" articleTitle="Newest Games" menu="Newest" ordering="-dates" />} />
                            </Route>
                            <Route path="popular" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuBase filterKey={null} articleTitle="Most Popular Games" menu="Popular" ordering="-metacritic" />} />
                            </Route>
                            <Route path="coming-soon"  >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuBase filterKey="tba" filterValue="1" articleTitle="Coming Soon" menu="TBA" ordering="-released" />} />
                            </Route>
                            <Route path=":gameSlug" element={<GameDetail />} />
                        </Route>
                        <Route path="developers" >
                            <Route path=":slug" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuBase filterKey="developers" articleTitle="Developers"  />} />
                            </Route>
                        </Route>
                        <Route path="publishers" >
                            <Route path=":slug" >
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<MenuBase filterKey="publishers" articleTitle="Publishers"  />} />
                            </Route>
                        </Route>
                        <Route path="about" element={<About />} />
                        <Route path="/search/:query" >
                            <Route path="" element={<Navigate to="1" />} />
                            <Route path=":page" element={<SearchResult />} />
                        </Route>
                        <Route path="browse/">
                            <Route path="developers">
                                <Route path="" element={<Navigate to="1" />} /> 
                                <Route path=":page" element={<BrowseBase browsePath="developers" />} /> 
                            </Route>
                            <Route path="publishers">
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<BrowseBase browsePath="publishers" />} />
                            </Route>
                            <Route path="genres">
                                <Route path="" element={<Navigate to="1" />} />
                                <Route path=":page" element={<BrowseBase browsePath="genres" />} />
                            </Route>
                            <Route path="platforms">
                                <Route path="" element={<Navigate to="1" />}/>
                                <Route path=":page" element={<BrowseBase browsePath="platforms" />}/>
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}



export default SuperContainer