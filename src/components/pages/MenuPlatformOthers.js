import MenuBase from "./MenuBase";

function MenuPlatformPS4() {
    return <MenuBase filterKey="platforms" filterValue="18" articleTitle="PlayStation 4 Games" menu="PS4" />
}

function MenuPlatformXboxOne() {
    return <MenuBase filterKey="platforms" filterValue="1" articleTitle="XBox One Games" menu="XBox One" />
}

function MenuPlatformXbox360() {
    return <MenuBase filterKey="platforms" filterValue="14" articleTitle="XBox 360 Games" menu="XBox 360" />
}

function MenuPlatformSwitch() {
    return <MenuBase filterKey="platforms" filterValue="7" articleTitle="Nintendo Switch Games" menu="Switch" />
}

function MenuPlatformIOS() {
    return <MenuBase filterKey="platforms" filterValue="3" articleTitle="iOS Games" menu="iOS" />
}

function MenuPlatformAndroid() {
    return <MenuBase filterKey="platforms" filterValue="21" articleTitle="Android Games" menu="Android" />
}

export {MenuPlatformPS4, MenuPlatformXboxOne, MenuPlatformXbox360, MenuPlatformSwitch, MenuPlatformIOS, MenuPlatformAndroid}