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

            <Col md lg={4} className={s.imgCol}>
                <img className={s.img}
                     src={img}
                     alt='img-title'
                />
            </Col>

            <Col md lg={6} className={s.contentCol}>

                <div className={s.content}>

                    <div className={s.title}>
                        <h1>{t('main.title')}</h1>
                        <p>{t('main.subtitle')}</p>
                    </div>

                    <div className={s.button}>
                        <button>Free...</button>
                    </div>

                    <div className={s.description}>
                        <p>{t('main.description')}</p>
                    </div>

                </div>
            </Col>

            <Col md lg={2} />

        </Row>
    );
};

export default Title;