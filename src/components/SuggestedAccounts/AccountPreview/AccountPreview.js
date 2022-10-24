import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { container as PopperContainer } from '~/components/Popper';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ ...props }) {
    return (
        <div tabIndex="-1" {...props}>
            <PopperContainer>
                <div className={cx('container')}>
                    <header className={cx('header')}>
                        <img
                            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            alt="avatar"
                            className={cx('avatar')}
                        />
                        <Button primary className={cx('user-follow')}>
                            Follow
                        </Button>
                    </header>

                    <p className={cx('user-wrapper')}>
                        <h4 className={cx('user-title')}>VuHoang</h4>
                        <div className={cx('user-check')}>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </div>
                    </p>
                    <p className={cx('user-desc')}>Vũ Hoàng</p>
                    <p className={cx('user-stat')}>
                        <span className={cx('user-text')}>5M</span>
                        <span className={cx('user-desc')}>Followers</span>
                        <span className={cx('user-text')}>179.1M</span>
                        <span className={cx('user-desc')}>Likes</span>
                    </p>
                </div>
            </PopperContainer>
        </div>
    );
}
// AccountPreview.propTypes = {
//     ...props: PropTypes.string,
// };
export default AccountPreview;
