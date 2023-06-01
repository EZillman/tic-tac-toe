<script setup lang="ts">
import { ref } from 'vue';
import GamePlayArea from './GamePlayArea.vue';

let currentPlayer = ref("X");

const showCurrentPlayer = (newCurrentPlayer: any) => {
    currentPlayer.value = newCurrentPlayer;
};

</script>

<template>
    <h2>It's player {{ currentPlayer }}'s turn</h2>

    <GamePlayArea @updateCurrentPlayer="showCurrentPlayer"></GamePlayArea>
  
</template>

<style scoped>


</style>
