import React from "react"
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
import "../static/SuperContainer.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function SuperContainer(props) {
    return (
        <div id="super-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Base />} >
                        <Route path="" element={<Home articleTitle="Latest in Gaming" />} />
                        <Route path="genres" >
                            <Route path="action" element={<MenuGenreAction />} />
                            <Route path="adventure" element={<MenuGenreAdventure />} />
                            <Route path="puzzle" element={<MenuGenrePuzzle />} />
                            <Route path="racing" element={<MenuGenreRacing />} />
                            <Route path="role-playing-games" element={<MenuGenreRPG />} />
                            <Route path="sports" element={<MenuGenreSports />} />
                            <Route path="strategy" element={<MenuGenreStrategy />} />
                            <Route path=":slug" element={<MenuBase filterKey="genres" articleTitle="Other Genres" menu="Other" />} />
                        </Route>
                        <Route path="platforms" >
                            <Route path="pc" element={<MenuPlatformPC />} />
                            <Route path="playstation-5" element={<MenuPlatformPS5 />} />
                            <Route path="playstation-4" element={<MenuPlatformPS4 />} />
                            <Route path="xbox-one" element={<MenuPlatformXboxOne />} />
                            <Route path="xbox-360" element={<MenuPlatformXbox360 />} />
                            <Route path="nintendo-switch" element={<MenuPlatformSwitch />} />
                            <Route path="ios" element={<MenuPlatformIOS />} />
                            <Route path="android" element={<MenuPlatformAndroid />} />
                            <Route path=":slug" element={<MenuBase filterKey="platforms" articleTitle="Other Platforms"  />} />
                        </Route>
                        <Route path="test" >
                            <Route path=":slug" element={<Test />} />

                        </Route>
                        <Route path="games" >
                            <Route path=":gameSlug" element={<GameDetail />} />
                        </Route>
                        <Route path="developers" >
                            <Route path=":slug" element={<MenuBase filterKey="developers" articleTitle="Developers"  />} />
                        </Route>
                        <Route path="publishers" >
                            <Route path=":slug" element={<MenuBase filterKey="publishers" articleTitle="Publishers"  />} />
                        </Route>
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}



export default SuperContainer