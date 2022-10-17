import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignIn,
    faSignOut,
    faUpload,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Languages',
            data: [
                { code: 'en', title: 'English ' },
                { code: 'vn', title: 'Việt Nam ' },
                { code: 'cn', title: 'China' },
                { code: 'jp', title: 'Japan' },
                { code: 'kr', title: 'Korea' },
                { code: 'fr', title: 'France' },
                { code: 'x1', title: 'العربية' },
                { code: 'x1', title: 'বাঙ্গালি (ভারত)' },
                { code: 'x1', title: 'Cebuano (Pilipinas)' },
                { code: 'x1', title: 'Čeština (Česká republika)' },
                { code: 'x1', title: 'Deutsch' },
                { code: 'x1', title: 'Ελληνικά (Ελλάδα)' },
                { code: 'x1', title: 'Español' },
                { code: 'x1', title: 'Suomi (Suomi)' },
                { code: 'x1', title: 'Filipino (Pilipinas)' },
                { code: 'x1', title: 'Français' },
                { code: 'x1', title: 'עברית (ישראל)' },
                { code: 'x1', title: 'हिंदी' },
                { code: 'x1', title: 'Magyar (Magyarország)' },
                { code: 'x1', title: 'Bahasa Indonesia (Indonesia)' },
                { code: 'x1', title: 'Italiano (Italia)' },
                { code: 'x1', title: '日本語（日本）' },
                { code: 'x1', title: 'Basa Jawa (Indonesia)' },
                { code: 'x1', title: 'ខ្មែរ (កម្ពុជា)' },
                { code: 'x1', title: '한국어 (대한민국)' },
                { code: 'x1', title: 'Bahasa Melayu (Malaysia)' },
                { code: 'x1', title: 'မြန်မာ (မြန်မာ)' },
                { code: 'x1', title: 'Nederlands (Nederland)' },
                { code: 'x1', title: 'Polski (Polska)' },
                { code: 'x1', title: 'Português (Brasil)' },
                { code: 'x1', title: 'Română (Romania)' },
                { code: 'x1', title: 'Русский (Россия)' },
                { code: 'x1', title: 'Svenska (Sverige)' },
                { code: 'x1', title: 'ไทย (ไทย)' },
                { code: 'x1', title: 'Türkçe (Türkiye)' },
                { code: 'x1', title: 'Українська (Україна)' },
                { code: 'x1', title: 'اردو' },
                { code: 'vn', title: 'Tiếng Việt (Việt Nam)' },
                { code: 'x1', title: '简体中文' },
                { code: 'x1', title: '繁體中文' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keybroad shortcuts',
    },
];
function Header() {
    // console.log(images.logo);
    const handleMenuChange = (menuItem) => {
        // console.log(menuItem);
    };
    const currentUser = true;

    const USER_MENU = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/user',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/getcoin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            nganCachTren: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="tiktok logo" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* <Tippy trigger="click" content="upload video" placement="bottom"> */}
                            <Tippy delay={[0, 50]} content="upload video" placement="bottom">
                                <Button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                                    <UploadIcon />
                                </Button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <Button className={cx('action-btn')}>
                                    <MessageIcon />
                                </Button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <Button className={cx('action-btn')}>
                                    <InboxIcon />
                                </Button>
                            </Tippy>
                            {/* <Button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </Button> */}
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faUpload} />}>
                                Upload
                            </Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />} to="/">
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            // components Image
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/6963149319855669250.jpeg?x-expires=1663833600&x-signature=NVoEQTt5oIQM91zfUc36pLCJSk0%3D"
                                alt="Nguyen Van A"
                                className={cx('user-avatar')}
                                imgFallBack="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
