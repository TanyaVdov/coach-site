import Navbar from "./navbar/Navbar";
import Lang from "./lang/Lang";
import {Row, Col} from "react-bootstrap";
import s from './header.module.scss';

const Header = () => {
    return (
            <Row className={s.row}>

                <Col lg={8}>
                    <Navbar/>
                </Col>

                <Col lg={2}/>

                <Col lg={2}>
                    <Lang/>
                </Col>

            </Row>
    );
};

export default Header;