import React from "react";
import HotGameItem from "./HotGameItem";


class HotGame extends React.Component {
    constructor(props) {
        super(props)
        this.data = props.hotData
    }

    render() {
        return (
            <div className="article">
                <div className="article-header">
                    <div className="article-header-name">Hot Games</div>
                </div>
                <div className="hotgames-grid">
                    {this.data.map(item => {return <HotGameItem key={item.id} props={item} />})}
                </div>
            </div>
        )
    }
}



export default HotGame