import React from "react";
import {Link} from "react-router-dom"

class HotGameItem extends React.Component {
    constructor(props) {
        super(props)
        this.title = props.props.name
        this.img = props.props.background_image === null ? "https://media.discordapp.net/attachments/717393005686030426/964046447978901534/SPOILER_EarthGoddess02.png?width=505&height=610" : props.props.background_image
        this.link = props.props.link
        this.slug = props.props.slug
        this.id = props.props.id
    }


    render() {
        return (
            <Link className="hotgames-item" to={`/games/${this.slug}`} >
                <img className="hotgames-item-img" src={this.img} alt="image" />
                <div className="hotgames-item-data">
                    <div className="hotgames-item-title">{this.title}</div>
                    <i className="bi bi-arrow-right-circle hotgames-item-arrow"></i>
                </div>
            </Link>
        )
    }
}

export default HotGameItem