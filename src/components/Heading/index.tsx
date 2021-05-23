import React, {ReactElement} from 'react';
import s from './Heading.module.scss';
import cn from "classnames";


interface HeadingProps {
    children: ReactElement | string,
    type: 'paragraph' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({
    children,
    type,
    className
}) => {
    return (
        <p className={cn(s[type], {className : className})}>{ children }</p>
    );
};

export default Heading;