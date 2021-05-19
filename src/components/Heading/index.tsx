import React, {ReactElement} from 'react';
import s from './Heading.module.scss';


interface HeadingProps {
    children: ReactElement | string,
    type: 'paragraph' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: React.FC<HeadingProps> = ({
    children,
    type,
}) => {
    return (
        <p className={s[type]}>{ children }</p>
    );
};

export default Heading;