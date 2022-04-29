import React from "react";
import Banner from "./Banner"
import Article from "./Article"
import ArticleExtra from "./ArticleExtra";
import HotGame from "./HotGame";
import "../static/Content.css"

class Content extends React.Component {

    render() {
        return (
            <div id="content" className="major-body">
                <Banner />
                <Article />
                <ArticleExtra />
                <HotGame />
            </div>
        )
    }
}


export default Content