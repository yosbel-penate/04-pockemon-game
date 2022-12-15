<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>Quién es este pokémo?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOptions 
            :pokemons = "pokemonArr"
             @selection="checkAnswer"
        /> 
        <template v-if="showAnswer" class="fade-in">
            <h2>{{message}}</h2>
            <button @click="newGame">
                Nuevo juego
            </button>
        </template>
    </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";
import getPokemontOptions from "@/helpers/getPokemonOptions";

export default {
    name: 'PokemonPage',

    components:{ PokemonOptions, PokemonPicture },
    data(){
        return {
            pokemonArr:[],
            pokemon: null,
            showPokemon:false,
            showAnswer:false,
            message: null
        }
    },
    methods: {
        async mixPokemonArrayAndSelectOne() {
            this.pokemonArr = await getPokemontOptions()
            this.pokemon = this.selectRandomOnePokemon(this.pokemonArr)
        },
        selectRandomOnePokemon(pokemonArr = []){
            const randomIntegerNumber = this.getRandomIntegerNumber(4)
            return pokemonArr[randomIntegerNumber]
        },
        getRandomIntegerNumber(interval){
            return Math.floor(Math.random()*interval)
        },
        checkAnswer(pokemonId){
            this.showAnswer = true
            if (this.pokemon.id === pokemonId) {
                this.message = `Selecionaste correctamente a ${this.pokemon.name}.`
                this.showPokemon = true
            } else{
                this.message = `Oops, era ${this.pokemon.name}`
            }
        },
        newGame(){
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArrayAndSelectOne()
        }
    },
     mounted(){
        this.mixPokemonArrayAndSelectOne()
    }
};
</script>

<style scoped>

</style>