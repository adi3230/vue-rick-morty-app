<template>
    <div class="character-list character-list__container">
        <div class="character-list__item" 
                v-for="character in characterList" 
                :key="character.id">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img :src="character.image"
                            class="character-list__item-image"
                            alt="Avatar">
                        </div>
                        <div class="flip-card-back">
                            <h1>{{character.name}}</h1>
                            <ul class="character-list__item-info">
                                <li>{{character.species}}</li>
                                <li>{{character.status}}</li>
                                <li>{{character.gender}}</li>
                                <li>{{character.location.name}}</li>
                                <li>{{character.species}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
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
        background-color: black;
        &-image {
            width: 100%;
            border-radius: 20px;
        }
        &-info {
            text-align: left;
        }
    }
}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: white;
  // color: white;
  transform: rotateY(180deg);
}
</style>
