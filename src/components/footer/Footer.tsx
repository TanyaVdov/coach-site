import React from "react";
// import '../../../utils/i18next';
import s from './footer.module.scss';
import location from '../../assets/icon/location.png';
import telegram from '../../assets/icon/telegram.png';
import instagram from '../../assets/icon/instagram.png';

// import {useTranslation} from 'react-i18next';
import {Row, Col} from 'react-bootstrap';

const Footer = () => {

    // const {t} = useTranslation();

    return (
        <Row className={s.row}>

            <Col lg={2}/>
            
            <Col lg={8} className={s.footer}>

                <ul>
                    <li>
                        <img src={location} alt="location" />
                        <a href="https://www.google.com.ua/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.401699,30.2525099,10z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234?hl=ru">
                            Kyiv, Ukraine</a>
                    </li>

                    <li>
                        <img src={telegram} alt="telegram" />
                        <a href="https://telegram.org/k/#@LAINED">
                            @LAINED</a>
                    </li>

                    <li>
                        <img src={instagram} alt="instagram" />
                        <a href="https://instagram.com/lained1020?igshid=YmMyMTA2M2Y=">
                            @lained1020</a>
                    </li>
                </ul>

                <p className={s.time}>{Date()}</p>

            </Col>

            <Col lg={2}/>

        </Row>
    );
};

export default Footer;