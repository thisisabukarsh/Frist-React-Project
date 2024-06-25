//functional component
// function App() {
//     return (
//         <div style={{ textAlign: "center", backgroundColor: "red" }}>
//             <h1 >Hello World!</h1>
//             <h1 >Hello World!</h1>
//         </div>
//     )
// }

//class cpmponent
import Profile from "./Profile";
import Courses from "./Courses";
import Title from "./TitleWithHooks";
import SocialProfiles from "./SocialProfiles";
import Qualifications from "./Qualifications";
import React from "react";
import "../index.css";

class App extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <Title />
                    <div className="column">
                        <Profile />
                    </div>
                    <div className="column">
                        <Qualifications />
                    </div>
                </div>
                <hr />
                <Courses />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}


export default App;