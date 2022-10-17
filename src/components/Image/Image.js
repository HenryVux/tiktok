import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

// const cx = classNames.bind(styles);
// function Image({ ...props }) {
//     return <img {...props} />;
// }

// export default forwardRef(Image);

// console.log(images.noImage);
const Image = forwardRef(({ src, alt, className, imgFallBack = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        // setFallback(images.noImage);
        // image default error can setup or use default image
        setFallback(imgFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            ref={ref}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    imgFallBack: PropTypes.string,
};

export default Image;
