<script setup lang="ts">
import { ref } from 'vue';
import GamePlayArea from './GamePlayArea.vue';

const playerX = localStorage.getItem("playerX") ?? "";
const playerO = localStorage.getItem("playerO") ?? "";

let currentPlayer = ref("");
let gameEnded = ref(false);


if (playerX && playerO) {
    currentPlayer.value = playerX;
};

const showCurrentPlayer = (newCurrentPlayer: any) => {
    currentPlayer.value = newCurrentPlayer === "X" ? playerX : playerO;
};

</script>

<template>
    <h2 v-if="!gameEnded">It's {{ currentPlayer }}'s turn</h2>

    <GamePlayArea 
    @updateCurrentPlayer="showCurrentPlayer"
    @gameEnded="gameEnded = true">
    </GamePlayArea>
  
</template>

<style scoped>


</style>
