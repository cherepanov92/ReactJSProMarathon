import React from 'react';
import Header from "../../components/Header";
import Button from "../../components/Button";
import {navigate} from "hookrouter";

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <div>
                <p>404</p>
                <Button onClick={() => navigate('/')} size={'small'}>на главную</Button>
            </div>
        </>
    );
};

export default NotFoundPage;