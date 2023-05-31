<script setup lang="ts">
import { defineEmits } from "vue";
import { reactive, ref } from "vue";
import { IPlayerData } from "../models/IPlayerData";


const emits = defineEmits(["updatePlayer"]);

const playerData = ref<IPlayerData>({playerName: ""});

const state = reactive({
    playerX: "",
    playerO: "",
    currentPlayer: "X",
});


const handleSubmit = () => {
    if (playerData.value.playerName === "") {
        return;
    }

    if (state.currentPlayer === "X") {
        state.playerX = playerData.value.playerName;
        playerData.value.playerName = "";
        state.currentPlayer = "O";
    } else if (state.currentPlayer === "O") {
        state.playerO = playerData.value.playerName;
        playerData.value.playerName = "";
    }

    emits("updatePlayer", state);
    
};

</script>

<template>
    <div>
        <h2>Player {{ state.currentPlayer }}</h2>
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="playerData.playerName">
            <button>Save</button>
            <button>Play</button>
        </form>

    </div>

</template>

<style scoped>

</style>
