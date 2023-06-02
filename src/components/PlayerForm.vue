<script setup lang="ts">
import { computed } from "vue";
import { reactive, ref } from "vue";
import { IPlayerData } from "../models/IPlayerData";

const playerData = ref<IPlayerData>({playerName: ""});

const state = reactive({
    playerX: "",
    playerO: "",
    currentPlayer: "X",
});

const emits = defineEmits(["updatePlayer"]);

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

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

input {
    width: 20rem;
    height: 1.5rem;
}

@media (max-width: 600px) {
    input {
        width: 10rem;
        height: 1rem;
    }

    button {
        font-size: 1rem;
        padding: 0.3em 0.6em;
        width: 10rem;
    }
}

</style>
