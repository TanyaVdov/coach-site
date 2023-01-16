import '../../utils/i18next';
import {BigItemProps} from '../../utils/types';
import s from './results.module.scss';
import GoalItem from "./ResultsItem";

import {useTranslation} from 'react-i18next';
import {Row, Col} from 'react-bootstrap';
import Footer from '../footer/Footer';

const Results = () => {

    const {t} = useTranslation();

    const resultsItems:BigItemProps[] = t('results', {returnObjects: true});

    return (
        <div>
            <Row className={s.row}>
                <Col lg={2} />
                
                <Col lg={8}>
                    <ul className={s.results}>
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

            <Footer/>
        </div>
    );
};
export default Results;