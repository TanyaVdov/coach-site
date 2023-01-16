import '../../../utils/i18next';
import s from './button.module.scss';
import {useTranslation} from 'react-i18next';

const Button = () => {

    const {t} = useTranslation();

    return (
        <div className={s.container}>
            <button className={s.button}>
                {t('button')}
            </button>
        </div>
    );
};

export default Button;