import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
import PropTypes from 'prop-types';

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
MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItems;
