import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

class SocialProfiles extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Contact Me</h1>
                {
                    SOCIAL_PROFILES.map(PROFILE => {
                        return <SocialProfile key={PROFILE.id} socialProfile={PROFILE} />
                    })
                }
            </div>
        );
    }
}

class SocialProfile extends React.Component {
    render() {
        const { image, link } = this.props.socialProfile
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt="Social Accounts" style={{ width: 25, margin: 5 }} />
            </a>
        );
    }
}

export default SocialProfiles;