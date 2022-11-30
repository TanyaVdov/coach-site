import React from 'react';
import s from './main.module.scss';
import Title from "./title/Title";
import Goal from "./goal/Goal";
import Resume from "./resume/Resume";
import Carousel from "./carousel/Carousel";
import Blurb from "./blurb/Blurb";
import Footer from "../footer/Footer";

const Main = () => {

    return (
        <div className={s.main}>
            <Title />
            <Goal />
            <Resume />
            <Carousel />
            <Blurb />
            <Footer />
        </div>
    );
};

export default Main;