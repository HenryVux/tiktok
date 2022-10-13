import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    onDisabled = false,
    small = false,
    large = false,
    className,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    let Compo = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        onDisabled,
        small,
        large,
    });
    if (to) {
        props.to = to;
        Compo = Link;
    } else if (href) {
        props.href = href;
        Compo = 'a';
    }
    // Remove event listener when btn is disabled
    if (onDisabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    return (
        <Compo className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Compo>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    onDisabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default forwardRef(Button);
