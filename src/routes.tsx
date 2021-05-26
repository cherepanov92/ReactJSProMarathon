import React, {PropsWithChildren} from "react";
import HomePage from "./pages/Home";
import EmptyPage from "./pages/Empty";
import PokedexPage from "./pages/Pokedex";
import PokemonPage, {PokemonProps} from "./pages/Pokemon";

interface IGeneralMenu {
    title: string,
    link: LinkEnum,
    component: (props: PropsWithChildren<any>) => JSX.Element
}

export enum LinkEnum {
    Home = '/',
    Pokedex = '/pokedex',
    Pokemon = '/pokedex/:id',
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
        component: () => <PokedexPage />
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

const SECOND_ROUTES: IGeneralMenu[] = [
    {
        title: 'Pokemon',
        link: LinkEnum.Pokemon,
        component: ({id}: PokemonProps) => <PokemonPage id={id} />
    }
]

interface IAccMenu {
    [n: string]:(props: PropsWithChildren<any>) => JSX.Element
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc:IAccMenu, item: IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {})

export default routes;