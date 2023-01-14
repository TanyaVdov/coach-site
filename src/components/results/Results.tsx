import '../../utils/i18next';
import {BigItemProps} from '../../utils/types';
import s from './results.module.scss';
import GoalItem from "./ResultsItem";

import {useTranslation} from 'react-i18next';
import {Row, Col} from 'react-bootstrap';

const Results = () => {

    const {t} = useTranslation();

    const resultsItems:BigItemProps[] = t('results', {returnObjects: true});

    return (
        <Row className={s.row}>
            <Col lg={2} />

            <Col lg={8} className={s.results}>
                <ul>
                {resultsItems.map((item:BigItemProps) => (
                    <GoalItem img={item.img}
                    title={item.title} subtitle={item.subtitle}
                    text1={item.text1} text2={item.text2} 
                    text3={item.text3} text4={item.text4} 
                    text5={item.text5}/>
                ))}
                </ul>
            </Col>

            <Col lg={2} />
        </Row>

    );
};
export default Results;