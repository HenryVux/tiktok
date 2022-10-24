import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
// import { Wrapper as PopperWrapper } from '~/components/Popper';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    // const renderPreview = (props) => {
    //     return (
    //         <div tabIndex="-1" {...props}>
    //             <AccountPreview />
    //         </div>
    //     );
    // };

    const renderPreview = () => <AccountPreview />;

    return (
        <div>
            <Tippy interactive delay={[1200, 0]} render={renderPreview} placement="bottom" zIndex="9999">
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
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {};
export default AccountItem;
