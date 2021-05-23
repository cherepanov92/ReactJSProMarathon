import React from 'react';
import Button from "../../components/Button";
import {navigate} from "hookrouter";
import {LinkEnum} from "../../routes";

const NotFoundPage = () => {
    return (
        <>
            <div>
                <p>404</p>
                <Button onClick={() => navigate(LinkEnum.Home)} size={'small'}>на главную</Button>
            </div>
        </>
    );
};

export default NotFoundPage;