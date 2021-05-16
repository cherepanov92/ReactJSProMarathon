import React from 'react';
import s from './Button.module.scss';
import cn from 'classnames';


interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    fullWidth?: boolean;
    type: 'success' | 'danger';
    size: 'small' | 'middle' | 'large';
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    fullWidth= true,
    // todo: переписать на enum
    type= 'success',
    size = 'middle'
}) => {
    return (
        <button
            type="button"
            className={cn(s.root, s[size], s[type], fullWidth ? s.fullWidth : null)}
            onClick={onClick}
        >
            { children }
        </button>
    );
};

export default Button;