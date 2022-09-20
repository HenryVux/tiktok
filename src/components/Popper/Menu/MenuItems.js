import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    // return <button>{JSON.stringify(data)}</button>;
    const classes = cx('menu-item', { separate: data.nganCachTren });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
