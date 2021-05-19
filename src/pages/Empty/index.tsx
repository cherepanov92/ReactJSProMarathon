import React from 'react';
import Header from "../../components/Header";

interface EmptyPageProps {
    title?: string
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
    return (
        <>
            <Header />
            <p>`Это {title ? title : 'пустая'} страница!`</p>
        </>
    );
};

export default EmptyPage;