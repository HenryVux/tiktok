import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                alt="avatar"
                className={cx('avatar')}
            />
            <div className={cx('item-info')}>
                <p className={cx('user-wrapper')}>
                    <h4 className={cx('user-title')}>VuHoang</h4>
                    <div className={cx('user-check')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                </p>
                <p className={cx('user-desc')}>Vũ Hoàng</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
