import React from "react";
import BannerItem from "../components/BannerItem"
import "../static/Banner.css"
import { CSSTransition, TransitionGroup } from "react-transition-group"


class Banner2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeBannerIndex: 0,
            data: props.bannerData
        }
    }

    // update state before re-render
    static getDerivedStateFromProps(newProps, state) {
        if (newProps.bannerData.length > 1){
            return {data: newProps.bannerData}
        }
        else{
            return {data: newProps.bannerData, activeBannerIndex: 0}
        }  
    }

    componentDidMount() {
        this.startBannerRotation()
    }

    componentWillUnmount() {
        clearInterval(this.bannerRotation)
    }

    startBannerRotation() {
        this.bannerRotation = setInterval(() => {
            this.rotateBanner()
        }, 3000);
    }

    rotateBanner() {
        if (this.state.activeBannerIndex === this.state.data.length -1){
            this.setState({activeBannerIndex: 0})
        }
        else{
            this.setState({activeBannerIndex: this.state.activeBannerIndex +1})
        }
    }

    render() {
        if (this.state.data.length > 0){
            return (
                <TransitionGroup  id="banner">
                    <CSSTransition
                        key={this.state.data[this.state.activeBannerIndex].id}
                        timeout={500}
                        classNames="fade"
                    >
                        <BannerItem key={this.state.data[this.state.activeBannerIndex].id} props={this.state.data[this.state.activeBannerIndex]} />
                    </CSSTransition>
                </TransitionGroup>
            )
        }
    }
}


export default Banner2