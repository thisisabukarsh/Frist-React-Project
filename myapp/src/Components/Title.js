import React, { Component } from 'react';


const TITLES = ["a software Engineer", " a tech lover", " a developer", " an enthusiastic"]

class Title extends Component {
    constructor() {
        super();
        this.state = { titleIndex: 0, fadeIn: true }

    }

    componentDidMount() {
        this.animateTitles();
        this.timeout = setTimeout(() => {
            this.setState({ fadeIn: false })
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles() {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });
            this.timeout = setTimeout(() => {
                this.setState({ fadeIn: false })
            }, 2000);
        }, 4000);
    }

    render() {
        return <p className={this.state.fadeIn ? "title-fade-in" : "title-fade-out"}>I am {TITLES[this.state.titleIndex]}</p>
    }


}

export default Title;