import React from "react";
import ArticleItem from "./ArticleItem";

class ArticleExtra extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: props.articleExtraData}
    }

    render() {
        return (
            <div className="article">
                <div className="article-header article-extra-header">
                    <div className="article-header-name">More Articles to Read</div>
                    <div className="article-header-menu article-extra-header-menu">
                        <button className="article-header-menu-item margin-left-0">Guide</button>
                        <button className="article-header-menu-item">News</button>
                        <button className="article-header-menu-item">Opinions</button>
                    </div>
                </div>
                <div className="article-grid">
                    {this.data.map (item => { return <ArticleItem key={item.id} props={item} />})}
                </div>


            </div>
        )
    }
}


export default ArticleExtra