import '../../../utils/i18next';
import {ItemProps} from '../../../utils/types';
import s from './goals.module.scss';
import GoalItem from "./GoalItem";

import {useTranslation} from 'react-i18next';
import {Row, Col} from 'react-bootstrap';

const Goal = () => {

    const {t} = useTranslation();

    const goalItems:ItemProps[] = t('goal.list', {returnObjects: true});

    return (
        <Row className={s.row}>
            <Col lg={2} />

            <Col lg={8} className={s.goal}>
                <h2>{t('goal.title')}</h2>

                <ul>
                {goalItems.map((item:ItemProps) => (
                    <GoalItem text={item.text} img={item.img}/>
                ))}
                </ul>
            </Col>

            <Col lg={2} />
        </Row>

    );
};
export default Goal;