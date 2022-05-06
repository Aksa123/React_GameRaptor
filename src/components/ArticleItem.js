import React from "react";
import {Link} from "react-router-dom"
import "../static/ArticleItem.css"

class ArticleItem extends React.Component {
    constructor(props) {
        super(props)
        this.background_image = props.props.background_image === null ? "https://media.discordapp.net/attachments/717393005686030426/964046447978901534/SPOILER_EarthGoddess02.png?width=505&height=610" : props.props.background_image
        this.menu = props.props.menu
        this.name = props.props.name
        this.id = props.props.id
        this.author = "Arseilles"
        this.date = new Date(props.props.released)
        this.date = this.date.toLocaleDateString(undefined, {day: "numeric", month: "short", year: "numeric"})
        this.platforms = props.props.platforms.map(item => item.platform.name).join(", ")
        this.genres = props.props.genres.map((item, index) => <Link key={item.id} to={`/genres/${item.slug}`} className="article-item-genre">{item.name}</Link> )
        this.genres = this.linearizeGenres(this.genres)
        this.id = props.props.id
        this.slug = props.props.slug
    }

    linearizeGenres(arr){
        let result = arr.map((item, index) => {
            if (index < arr.length -1) {
                return <span key={index} className="article-item-genre">{item}, </span>
            }
            else{
                return <span key={index} className="article-item-genre">{item}</span>
            }
        })
        return result
    }


    render() {
        return (
            <div className="article-item" >
                <Link to={`/games/${this.slug}`}>
                    <img className="article-item-img" src={this.background_image} alt="article img" />
                </Link>
                <div className="article-item-data">
                    <div className="article-item-menu">{this.menu}</div>
                    <div className="article-item-title"><Link to={`/games/${this.slug}`}>{this.name}</Link></div>
                    <div className="article-item-genre-date-container">
                        <div>
                            {this.genres}
                        </div>
                        <div className="article-item-date">{this.date}</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ArticleItem