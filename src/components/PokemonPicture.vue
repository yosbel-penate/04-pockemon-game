<template>
    <div class="pokemon-container">
        <img v-if="!showPokemon" 
            :src="imgSrc"
            class="hidden-pokemon"
            alt="pockemon"
        >
        <img v-else
            :src="imgSrc" 
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
    height: 200px;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -ms-user-select: none;
    -moz-user-select: none;
   }
</style>