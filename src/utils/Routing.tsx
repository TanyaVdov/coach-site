import React from "react";
import {Routes, Route} from "react-router";

import Main from "../components/main/Main";
import About from "../components/about/About";
import Results from "../components/results/Results";
import Button from "../components/data/button/Button";

const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/result" element={<Results/>} />
            <Route path="/contacts" element={<Button/>} />
            <Route element={<div>Not Found</div>} />
        </Routes>
    );
};

export default Routing;