import '../../../utils/i18next';
import s from './goal.module.scss';

import {useTranslation} from 'react-i18next';
import {Row, Col} from 'react-bootstrap';
import GoalItem from "./GoalItem";

const Goal = () => {

    type GoalItemType = {
        id : string;
        text: string;
        children: JSX.Element|JSX.Element[];
    }

    const {t} = useTranslation();

    const goalItemAll:Array<GoalItemType> = t('goal.list', {returnObjects: true});

    return (
        <Row className={s.row}>

            <Col lg={2} />

            <Col lg={8} className={s.goal}>

                <h2>{t('goal.title')}</h2>

                {goalItemAll.map((item) => {
                    <GoalItem id={item.id} text={item.text}/>
                })}

            </Col>

            <Col lg={2} />

        </Row>
    );
};

export default Goal;