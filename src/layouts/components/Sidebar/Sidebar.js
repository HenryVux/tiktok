import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeIconActive,
    UserGroupIcon,
    UserGroupIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Profile"
                    to={config.routes.profile}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuItem
                    title="Follow"
                    to={config.routes.follow}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>
            <div className={cx('xline')}></div>
            <SuggestedAccounts label="Suggested accounts" />
            {/* <SuggestedAccounts label="Following accounts" /> */}
        </aside>
    );
}

export default Sidebar;
