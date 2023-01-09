import '../../../utils/i18next';
import {CarouselItemPropsType} from '../../../utils/types';
import s from './carousel.module.scss';

import {useTranslation} from 'react-i18next';
import {Row, Col} from 'react-bootstrap';
import CarouselItem from "./CarouselItem";

const Carousel = () => {

    const {t} = useTranslation();

    const carouselItemAll:CarouselItemPropsType[] = t('carousel', {returnObjects: true});

    return (
        <Row className={s.row}>

            <Col lg={2} />

            <Col lg={8}>
            <CarouselItem>
                {/* <ul>
                    {carouselItemAll.map(({img, title, text}:CarouselItemPropsType) => (
                        <li 
                        className={s.img}
                        key={img}
                        >
                            <h2>{t(title)}</h2>
                            <ul>{text.map(tex => (
                                <li key={img}>{t(tex)}</li>
                            ))}
                            </ul>
                        </li>
                    ))}
                </ul> */}

<ul>
                    {carouselItemAll.map(({img, title, text}:CarouselItemPropsType) => (
                        <li 
                        className={s.img}
                        key={img}
                        >
                            <h2>{t(title)}</h2>
                            <ul>{text.map(tex => (
                                <li key={img}>{t(tex)}</li>
                            ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </CarouselItem>

            </Col>

            <Col lg={2} />

        </Row>
    );
};

export default Carousel;