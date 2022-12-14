import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import MenuItems from './MenuItems';
import Header from './Header';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    // lay ptu cuoi cua mang
    const current = history[history.length - 1];
    // console.log('current:', current);
    const renderItems = () => {
        // return items.map((item, index) => <MenuItems key={index} data={item} />);
        return current.data.map((item, index) => {
            const isParent = !!item.children; // !! - convert boolean
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // console.log(item.children);
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-lst')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title} //"Language"
                        onBack={handleBack}
                    />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <div>
            <Tippy
                interactive
                // visible // bo visible thay the hover
                delay={[0, 500]}
                offset={[12, 8]}
                hideOnClick={hideOnClick}
                placement="bottom-end"
                render={renderResult}
                onHide={handleResetMenu} // reset menu - handle Reset To Frist Page
            >
                {children}
            </Tippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
