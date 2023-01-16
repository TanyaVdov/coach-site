import React, {useState} from "react";
import '../../../utils/i18next';
import s from "./resume.module.scss";

import {Row, Col} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Resume = () => {

    const {t} = useTranslation();

    const [itemMode, setItemMode]= useState(false);

    const setText3Mode = () => {
        setItemMode(true);
    }
    const setText12Mode = () => {
        setItemMode(false);
    }
    
    return (
        <Row className={s.row}>
            <Col lg={2} />

            <Col sm={12} md={6} lg={4} className={s.colImg}>
                <div className={s.name}>
                    <h2>{t('resume.name')}</h2>
                    <p>{t('resume.subname')}</p>
                </div>
            </Col>

            <Col sm={12} md={6} lg={4} className={s.colContent}>
                <div className={s.content}
                    onMouseEnter={setText3Mode}
                    onMouseLeave={setText12Mode}>

                    {!itemMode && 
                        <p className={s.text1}>{t('resume.text1')}
                            <p className={s.text2}>{t('resume.text2')}</p>
                        </p>
                    }
                    {itemMode &&
                    <p className={s.text3}>{t('resume.text3')}</p>
                    }
                </div>
            </Col>

            <Col lg={2} />
        </Row>
    );
};
export default Resume;