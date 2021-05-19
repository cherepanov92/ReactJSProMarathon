import React from 'react';
import Heading from "../../components/Heading";
import Header from "../../components/Header";

const EmptyPage = () => {
    return (
        <>
            <Header />
            <Heading type={'h4'}>Это пустая страница!</Heading>
        </>
    );
};

export default EmptyPage;