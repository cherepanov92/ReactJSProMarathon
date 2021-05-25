import React from 'react';
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import Heading from "../../components/Heading";

import s from './Home.module.scss';
import {navigate} from "hookrouter";
import {LinkEnum} from "../../routes";

const HomePage = () => {
    return (
        <div className={s.root}>
            <Layout className={}>
                <div className={}>
                    <Heading type='h1'>
                        <b>Find</b> all you favorite <b>Pokemon</b>
                    </Heading>
                    <Heading type={'h4'}>
                        You can know the type of Pokemon, its strengths, disadvantages and abilities
                    </Heading>
                    <Button onClick={() => navigate(LinkEnum.Pokedex)}>See pokemons</Button>
                </div>
                <div>
                    <Parallax />
                </div>
            </Layout>
        </div>
    );
};

export default HomePage;