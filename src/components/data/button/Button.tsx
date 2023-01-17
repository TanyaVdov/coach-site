import '../../../utils/i18next';
import s from './button.module.scss';
import Modal from '../modal/Modal';
import telegram from '../../../assets/icon/telegram.png';
import instagram from '../../../assets/icon/instagram.png';

import {useTranslation} from 'react-i18next';
import { useState } from 'react';
import {Row, Col} from 'react-bootstrap';

const Button = () => {

    const {t} = useTranslation();
    const [modal, setModal] = useState(false);

    return (
        <div className={s.container}>
            <div className={s.colButton}>
                <button className={s.button} onClick={()=>setModal(true)}>
                    {t('button')}
                </button>
            </div>

            <div className={s.media}>
                <a href="https://t.me/LAINED" target="blank">
                    <img src={telegram} alt='telegram'/></a>
                <a href="https://www.instagram.com/lained1020/" target="blank">
                    <img src={instagram} alt='instagram'/></a>
            </div>

            {modal &&
            <Modal modal={modal} setModal={setModal}/>}
        </div>
    );
};

export default Button;