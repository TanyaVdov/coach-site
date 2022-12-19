import React from "react";
import '../../../utils/i18next';
import s from "./resume.module.scss";

import {Row, Col} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Resume = () => {

    const {t} = useTranslation();

    return (
        <Row className={s.row}>

            <Col lg={2} />

            <Col lg={4} className={s.colImg}>

                <div className={s.name}>
                    <h2>{t('about.name')}</h2>
                    <p>{t('about.subname')}</p>
                </div>
            </Col>

            <Col lg={4} className={s.colContent}>
                <div className={s.content}>
                    <p className={s.text1}>{t('about.text1')}</p>
                    <p className={s.text2}>{t('about.text2')}</p>
                    <p className={s.text3}>{t('about.text3')}</p>
                </div>
            </Col>

            <Col lg={2} />

        </Row>
    );
};

export default Resume;