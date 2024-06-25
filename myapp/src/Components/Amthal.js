import { Component } from "react";


class Amthal extends Component {

    constructor() {
        super();
        this.state = { mathal: {}, amthal: [] };

    }
    componentDidMount() {
        fetch("http://localhost:3005/amthal/random")
            .then((response) => response.json())
            .then((json) => this.setState({ mathal: json }));

    }

    fetchAmthal = () => {
        fetch("http://localhost:3005/amthal/ten")
            .then((response) => response.json())
            .then((json) => this.setState({ amthal: json }));
    }
    render() {
        return (
            <div>
                <h2>Amthal</h2>
                <p>{this.state.mathal.title}</p>
                <hr />
                <h3>Do U need more quotes</h3>
                <button className="btn" onClick={this.fetchAmthal}>More</button>
                {
                    this.state.amthal.map(mathal => {
                        return <p key={mathal.id}>{mathal.title}</p>
                    })
                }
            </div>
        )
    }
}

export default Amthal;