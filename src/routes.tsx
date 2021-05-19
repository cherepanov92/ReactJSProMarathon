import React from "react";
import HomePage from "./pages/Home";
import EmptyPage from "./pages/Empty";

interface IGeneralMenu {
    title: string,
    link: LinkEnum,
    component: () => JSX.Element
}

export enum LinkEnum {
    Home = '/',
    Pokedex = '/pokedex',
    Legendaries = '/legendaries',
    Documentation = '/documentation',
}

export const GENERAL_MENU: IGeneralMenu[] = [
    {
        title: 'Home',
        link: LinkEnum.Home,
        component: () => <HomePage />
    },
    {
        title: 'Pokédex',
        link: LinkEnum.Pokedex,
        component: () => <EmptyPage title={'Pokedex'} />
    },
    {
        title: 'Legendaries',
        link: LinkEnum.Legendaries,
        component: () => <EmptyPage title={'Legendaries'} />
    },
    {
        title: 'Documentation',
        link: LinkEnum.Documentation,
        component: () => <EmptyPage title={'Documentation'} />
    },
]

interface IAccMenu {
    [n: string]:() => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc:IAccMenu, item: IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {})

export default routes;