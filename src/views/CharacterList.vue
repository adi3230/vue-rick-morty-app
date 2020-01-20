<template>
    <div class="character-list character-list__container">
        <div class="character-list__item" 
                v-for="character in characterList" 
                :key="character.id">
                <img :src="character.image" class="character-list__item-image" alt="Character Image"/>
            <p>Name: {{character.name}}</p>
            <p>Status: {{character.status}}</p>
            <p>Species: {{character.species}}</p>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'CharacterList',
    computed: {
        ...mapState({
            characterList: 'characters'
        }),
    },
    mounted () {
        this.$store.dispatch('fetchCharacterList');        
    }
}
</script>
<style lang="scss" scoped>
.character-list {
    background-color: black;
    &__container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 30px;
        margin: 1rem;
    }
    &__item {
        border-radius: 20px;
        background-color: white;
        &-image {
            width: 100%;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
    }
}
</style>
