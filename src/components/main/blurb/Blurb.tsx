import React from "react";
import '../../../utils/i18next';
import s from './blurb.module.scss';
import Button from "../../data/button/Button";

import {Row, Col} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Blurb = () => {

    const {t} = useTranslation();

    return (
        <Row className={s.row}>

            <Col lg={2} />

            <Col lg={8} className={s.blurb}>

                <div className={s.content}>

                    <div className={s.list}>
                        <p>1. {t('blurb.text1')}</p>
                        <p>2. {t('blurb.text2')}</p>
                        <p>3. {t('blurb.text3')}</p>
                        <p>{t('blurb.text4')}</p>
                    </div>
                    
                    <div className={s.text}>
                        <p>{t('blurb.text5')}</p>
                        <p>{t('blurb.text6')}</p>
                        <p>{t('blurb.text7')}</p>
                    </div>

                </div>

                <div className={s.button}>
                    <Button />
                </div>
            </Col>

            <Col lg={2} />

        </Row>
    );
};

export default Blurb;