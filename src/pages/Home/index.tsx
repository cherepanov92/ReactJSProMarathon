import React from 'react';
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import Heading from "../../components/Heading";

import s from './Home.module.scss';

const HomePage = () => {
    return (
        <div className={s.root}>
            <Header />
            <Layout className={s.contextWrap}>
                <div className={s.contextText}>
                    <Heading type={'h1'}>
                        <b>Find</b> all you favorite <b>Pokemon</b>
                    </Heading>
                    <Heading type={'h4'}>
                        You can know the type of Pokemon, its strengths, disadvantages and abilities
                    </Heading>
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