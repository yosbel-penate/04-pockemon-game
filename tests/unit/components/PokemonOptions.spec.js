import { shallowMount } from "@vue/test-utils"
import PokemonOptions  from "@/components/PokemonOptions"
import { pokemonsMock } from "../mocks/pokemons.mock";
describe('PokemonOption component', () => {
    let wrapper
    beforeEach(()=>{
        wrapper = shallowMount(PokemonOptions, {
            props:{
                pokemons: pokemonsMock
            }
        })
    })

    test('Debe hacer match con el snapshot', () => { 
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('debe mostrar las 4 opciones correctamente', () => { 
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)
        for (let index = 0; index < liTags.length; index++) {
            expect(liTags[index].text()).toBe(pokemonsMock[index].name)
        }
     })
    test('debe de emitir el evento "selection" con sus respectivos parametros', () => { 
        const liTags = wrapper.findAll('li')
        for (let index = 0; index < liTags.length; index++) {
            liTags[index].trigger('click')
            expect(wrapper.emitted('selection')[index][0]).toBe(index+1)
        }
    })
 })