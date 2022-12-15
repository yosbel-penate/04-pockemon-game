<template>
    <div class="pokemon-container">
        <img :src="imgSrc"
            class="hidden-pokemon"
            alt="pockemon"
        >
        <img :src="imgSrc" 
            v-if="showPokemon"
            class="fade-in"
            alt="pockemon"
        >    
    </div>
</template>

<script>
export default {
    name: 'PokemonPicture',
    props:{
        pokemonId:{ 
            type: Number,
            requere: true
        },
        showPokemon:{ 
            type: Boolean,
            requere: true,
            default: false
        }
    },
    computed:{
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
        }
    }
};
</script>

<style scoped>
    .hidden-pokemon{
        filter: brightness(0);
    }
   .pokemon-container{
    height: 200px;
   }
   img{ 
    user-select: none;
    right: 37%;
    position: absolute;
    height: 200px;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -ms-user-select: none;
    -moz-user-select: none;
   }
</style>