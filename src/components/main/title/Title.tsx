import '../../../utils/i18next';
import s from './title.module.scss';

import {useTranslation} from 'react-i18next';
import {Row, Col} from 'react-bootstrap';

const Title = () => {

    const {t} = useTranslation();

    return (
        <Row className={s.row}>

            <Col lg={4} className={s.colImg}/>

            <Col lg={6} className={s.colContent}>

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

            <Col lg={2}></Col>

        </Row>
    );
};

export default Title;