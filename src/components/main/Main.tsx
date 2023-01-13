import s from './main.module.scss';
import Title from "./title/Title";
import Goals from "./goals/Goals";
import Resume from "./resume/Resume";
import Carousel from "./carousel/Carousel";
import Blurb from "./blurb/Blurb";
import Footer from "../footer/Footer";

const Main = () => {
    return (
        <div className={s.main}>
            <Title />
            <Goals />
            <Resume />
            <Carousel />
            <Blurb />
            <Footer />
        </div>
    );
};
export default Main;