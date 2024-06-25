import ReactDOM from "react-dom";
import App from "./Components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Amthal from "./Components/Amthal";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/amthal" element={<Amthal />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </BrowserRouter>
    , document.getElementById("root"))
