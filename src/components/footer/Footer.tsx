import s from './footer.module.scss';
import location from '../../assets/icon/location.png';
import telegram from '../../assets/icon/telegram.png';
import instagram from '../../assets/icon/instagram.png';

import {Row, Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <Row className={s.row} id='footer'>
            <Col lg={2}/>
            
            <Col lg={8} className={s.footer}>
                <ul>
                    <li key={location}>
                        <a href="https://www.google.com.ua/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.401699,30.2525099,10z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234?hl=ru"
                        target="blank">
                            <img src={location} alt={location} />
                            Kyiv, Ukraine</a>
                    </li>
                    <li>
                        <a href="https://t.me/LAINED" target="blank">
                            <img src={telegram} alt={telegram} />
                            @LAINED</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/lained1020/" target="blank">
                            <img src={instagram} alt={instagram}/>
                            @lained1020</a>
                    </li>
                </ul>
                <p className={s.time}>{(new Date().getFullYear())}</p>
            </Col>

            <Col lg={2}/>
        </Row>
    );
};

export default Footer;