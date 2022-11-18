import React from "react";
import '../../../utils/i18next';
import s from './title.module.scss';
import img from '../../../assets/photo/title.jpg';

import {useTranslation} from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = () => {

    const {t} = useTranslation();

    return (
        <Row className={s.row}>

            <Col lg={4} className={s.imgCol}>
                <img className={s.img}
                     src={img}
                     alt='img-title'
                />
            </Col>

            <Col lg={8} className={s.contentCol}>
                <div className={s.content}>

                    <div className={s.title}>
                        <h1>{t('main.title')}</h1>
                        <p>{t('main.desc1')}</p>
                    </div>

                    <div>
                        <button>Free...</button>
                    </div>

                    <div className={s.desc}>
                        <p>{t('main.desc2')}</p>
                    </div>

                </div>
            </Col>

        </Row>
    );
};

export default Title;