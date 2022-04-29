import React from "react";
import {Link} from "react-router-dom"
import "../static/BannerItem.css"

class BannerItem extends React.Component {
    constructor(props){
        super(props)
        this.name = props.props.name
        this.updated = new Date(props.props.updated)
        this.updated = this.updated.toLocaleDateString(undefined, {day: "numeric", month: "short", year: "numeric"})
        this.author =  "Axa"
        this.link = props.props.link
        this.background_image = props.props.background_image === null ? "https://media.discordapp.net/attachments/717393005686030426/964046447978901534/SPOILER_EarthGoddess02.png?width=505&height=610" : props.props.background_image
        this.menu = props.props.menu
        this.id = props.props.id
        this.slug = props.props.slug
    }

    render() {
        return (
            <div className="banner-item">
                <img className="banner-item-image" src={this.background_image} alt="banner image" />
                <div className="banner-item-data">
                    <div className="banner-item-menu">{this.menu}</div>
                    <div className="banner-item-title"><Link to={`/games/${this.slug}`}>{this.name}</Link></div>
                    <div className="banner-item-date-author-container">
                        <div className="banner-item-date">{this.updated}</div> | By: <div className="banner-item-author">{this.author}</div>
                    </div>
                    
                    <Link className="banner-item-link" to={`/games/${this.slug}`}>
                        Read More
                    </Link>
                </div>
            </div>
        )
    }
}



export default BannerItem