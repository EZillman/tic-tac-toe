<script setup lang="ts">
import { computed } from "vue";
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

const playerNamesSaved = computed(() => {
    return state.playerX !== "" && state.playerO !== "";
});

</script>

<template>
    <div>
        
        <h2 v-if="!playerNamesSaved">Player {{ state.currentPlayer }}</h2>
        <form @submit.prevent="handleSubmit" v-if="!playerNamesSaved">
            <input type="text" v-model="playerData.playerName">
            <button>Save</button>
        </form>
        <RouterLink to="/game"><button v-if="playerNamesSaved">Play</button></RouterLink>

    </div>

</template>

<style scoped>

</style>
