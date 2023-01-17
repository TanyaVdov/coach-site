import s from './modal.module.scss';
import {ModalProps} from '../../../utils/types';
import telegram from '../../../assets/icon/telegram.png';
import instagram from '../../../assets/icon/instagram.png';

const Modal = ({modal, setModal}:ModalProps) => {
    return (
        <div className={s.container} onClick={() => setModal(false)}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <div className={s.media}>
                <a href="https://t.me/LAINED" target="blank">
                    <img src={telegram} alt='telegram'/></a>
                <a href="https://www.instagram.com/lained1020/" target="blank">
                    <img src={instagram} alt='instagram'/></a>
            </div>
            </div>
        </div>
    );
};

export default Modal;