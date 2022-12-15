import getPokemontOptions, { getPokemonts, getPokemonNames  } from "@/helpers/getPokemonOptions";
import { pokemonsMock } from "../mocks/pokemons.mock";
describe('getPokemonOptions helpers', () => { 
    test('debe de regresar un arreglo de numeros', () => { 
        const pokemons = getPokemonts()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
     })
    test('debe de retornar un arreglo de 4 elementos con nombres de pokemons', async () => { 
        const pokemons = await getPokemonNames([1,2,3,4])
        const pokemonsSpect = pokemonsMock
        expect(pokemons).toStrictEqual(pokemonsSpect)
    })
    test('getPokemonOptions debe retornar un arreglo mezclado', async () => { 
        const pokemons = await getPokemontOptions()
        console.log(pokemons)
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            { 
                name: expect.any(String),
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String),
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String),
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String),
                id: expect.any(Number) 
            }
          ])
    })
 })