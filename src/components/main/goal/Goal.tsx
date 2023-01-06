import '../../../utils/i18next';
import {ItemPropsType} from '../../../utils/types';
import s from './goal.module.scss';

import {useTranslation} from 'react-i18next';
import {Row, Col} from 'react-bootstrap';
import GoalItem from "./GoalItem";

const Goal = () => {

    const {t} = useTranslation();

    const goalItemAll:ItemPropsType[] = t('goal.list', {returnObjects: true});

    return (

        <Row className={s.row}>

            <Col lg={2} />

            <Col lg={8} className={s.goal}>

                <h2>{t('goal.title')}</h2>
                <h2>{t('')}</h2>

                <ul>
                {goalItemAll.map((item:ItemPropsType) => (
                    <GoalItem text={item.text} img={item.img}/>
                ))}
                </ul>

            </Col>

            <Col lg={2} />

        </Row>

    );
};

export default Goal;