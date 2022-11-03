import React from "react";
import {Routes, Route} from "react-router";

import Main from "../components/main/Main";
import About from "../components/about/About";
import Result from "../components/result/Result";


const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/result" element={<Result/>} />
            <Route element={<div>Not Found</div>} />
        </Routes>
    );
};

export default Routing;