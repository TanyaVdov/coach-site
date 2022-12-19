import React from "react";
import '../../../utils/i18next';
import s from './blurb.module.scss';

import {Row, Col} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Blurb = () => {

    const {t} = useTranslation();

    return (
        <Row className={s.row}>

            <p>{t('about.name')}</p>
        </Row>
    );
};

export default Blurb;