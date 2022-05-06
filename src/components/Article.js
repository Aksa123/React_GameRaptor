import React from "react";
import ArticleItem from "./ArticleItem";
import "../static/Article.css"

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.articleData,
            articleTitle: props.articleTitle
        }
    }

    // update state with new props before rendering
    static getDerivedStateFromProps(newProps, state) {
        return {data: newProps.articleData, articleTitle: newProps.articleTitle}
    }

    render() {
        if (this.state.data.length > 0) {
            return (
                <div className="article">
                    <div className="article-header">
                        <div className="article-header-name">{this.state.articleTitle}</div>
                        <div className="article-header-viewall">View All <i className="bi bi-arrow-right-circle"></i></div>
                    </div>
                    <div className="article-grid">
                        {this.state.data.length > 0 ? 
                        this.state.data.map (item => { return <ArticleItem key={item.id} props={item} />})
                        : <div>No more games :(</div> }
                    </div>
                </div>
            )
        }
    }
}


export default Article