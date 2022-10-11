import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import MenuItems from './MenuItems';
import Header from './Header';

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

    return (
        <div>
            <Tippy
                interactive
                visible // bo visible thay the hover
                delay={[0, 500]}
                offset={[12, 8]}
                hideOnClick={hideOnClick}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('menu-lst')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <Header
                                    title={current.title} //"Language"
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            <div className={cx('menu-body')}>{renderItems()}</div>
                        </PopperWrapper>
                    </div>
                )}
                // reset menu
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
