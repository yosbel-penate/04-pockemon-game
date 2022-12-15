import { shallowMount, mount } from "@vue/test-utils"
import PokemonPage from '@/pages/PokemonPage'
import { pokemonsMock } from "../mocks/pokemons.mock"

describe('PokemonPage component', ()=> {
    let wrapper
    beforeEach(()=>{
        wrapper = shallowMount(PokemonPage)
    })
    test('debe de match con el snapshop cuando cargan lo pokemons', () => { 
        const wrapper = shallowMount(PokemonPage,{
            data(){
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon:false,
                    showAnswer:false,
                    message: null
                }
            },
        })
        expect(wrapper.html()).toMatchSnapshot()

     })
    test('debe de llamar al metodo mixPokemonArray al montar', () => { 
        const moxPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArrayAndSelectOne')
        const wrapper = shallowMount(PokemonPage)
        expect(moxPokemonArraySpy).toHaveBeenCalled()
    })
    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => { 
        const wrapper = shallowMount(PokemonPage,{
            data(){
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon:false,
                    showAnswer:false,
                    message: null
                }
            },
        })
        const pictureComponent = wrapper.find('pokemon-picture-stub')
        const optionComponet = wrapper.find('pokemon-options-stub')

        expect(pictureComponent.exists()).toBeTruthy()
        expect(pictureComponent.attributes('pokemonid')).toBe('1')
        expect(optionComponet.exists()).toBeTruthy()

     })
    test('pruebas con checkAnswer', async () => { 
        const wrapper = shallowMount(PokemonPage,{
            data(){
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon:false,
                    showAnswer:false,
                    message: null
                }
            },
        })
        await wrapper.vm.checkAnswer(5)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showAnswer).toBeTruthy()

    })

})