import React from 'react';
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

import s from './Home.module.scss';
import Parallax from "../../components/Parallax";

const HomePage = () => {
    return (
        <div className={s.root}>
            <Header />
            <Layout className={s.contextWrap}>
                <div className={s.contextText}>
                    <h1 className={s.heading}>
                        <b>Find</b> all you favorite <b>Pokemon</b>
                    </h1>
                    <p>text</p>
                    <Button onClick={() => console.log('Button click')}>See pokemons</Button>
                </div>
                <div>
                    <Parallax />
                </div>
            </Layout>
        </div>
    );
};

export default HomePage;