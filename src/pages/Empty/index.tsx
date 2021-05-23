import React from 'react';

interface EmptyPageProps {
    title?: string
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
    return (
        <>
            <p>Это {title ? title : 'пустая'} страница!</p>
        </>
    );
};

export default EmptyPage;