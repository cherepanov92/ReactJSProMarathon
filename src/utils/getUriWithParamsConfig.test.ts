import getUriWithParamsConfig from "./getUriWithParamsConfig";

describe('Взятие url с параметром из конфига' , () => {
    describe('getPokemons' , () => {
        test('Должна принимать два аргумента "getPokemons" и пустой объект, на выходе получать объект с полями phatname, protocol, host и пустым query',
            () => {
                const url = getUriWithParamsConfig('getPokemons', {});

                expect(url).toEqual({
                    protocol: 'http',
                    host: 'zar.hosthot.ru',
                    pathname: '/api/v1/pokemons',
                    query: {},
                }
            )
        });
        test('Должна принимать два аргумента "getPokemons" и { name: "Pikachu"}, на выходе получать объект с полями phatname, protocol, host и параметром query',
            () => {
                const url = getUriWithParamsConfig('getPokemons', {name: "Pikachu"});

                expect(url).toEqual({
                    protocol: 'http',
                    host: 'zar.hosthot.ru',
                    pathname: '/api/v1/pokemons',
                    query: {"name": "Pikachu"},
                })
            }
        );
    });
    describe('getPokemon' , () => {
        test('Должна принимать два аргумента "getPokemon" и {id: 25}, на выходе получать объект с полями phatname, protocol, host и пустым query',
            () => {
                const url = getUriWithParamsConfig('getPokemon', {id: 25});

                expect(url).toEqual({
                    protocol: 'http',
                    host: 'zar.hosthot.ru',
                    pathname: '/api/v1/pokemon/25',
                    query: {},
                })
            }
        );
    });
});
