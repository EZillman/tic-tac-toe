<script setup lang="ts">
import { onMounted, ref } from "vue";
import PlayerSelect from "./PlayerForm.vue";


const state = ref({
    playerX: "",
    playerO: "",
    currentPlayer: "X",
});

const saveName = (updatePlayer: any) => {
    state.value.playerX = updatePlayer.playerX;
    state.value.playerO = updatePlayer.playerO;

    localStorage.setItem("playerX", updatePlayer.playerX);
    localStorage.setItem("playerO", updatePlayer.playerO);
};

onMounted(() => {
    const playerX = localStorage.getItem("playerX");
    const playerO = localStorage.getItem("playerO");

    if (playerX) {
        state.value.playerX = playerX;
    }
    
    if (playerO) {
        state.value.playerO = playerO;
    }
});

</script>

<template>
    <h2>Landing page</h2>

    <PlayerSelect :state="state" @updatePlayer="saveName"></PlayerSelect>
  
</template>

<style scoped>

</style>
