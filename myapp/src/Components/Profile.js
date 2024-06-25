import React from "react";
import ProfilePicture from "../assets/IMG_20230709_103705_112.jpg";


class Profile extends React.Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        //     if (this.state.displayBio) {
        //         this.setState({ displayBio: false });
        //     } else {
        //         this.setState({ displayBio: true });
        //     }
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        return (
            <div>
                <img src={ProfilePicture} className="profile" alt="Profile Pictuer" />
                <h1>Hello World!</h1>
                <p>im abdulrahman a software enginner </p>

                {this.state.displayBio === true ? (
                    <div>
                        <p>aksnf;ak</p>
                        <p>aslfbalsjfb</p>
                        <button onClick={this.toggle} className="btn"> Hide</button>
                    </div>
                ) : (
                    <button onClick={this.toggle} className="btn"> Show More</button>
                )}

            </div>
        )
    }
}


export default Profile;