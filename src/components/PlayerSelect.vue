<script setup lang="ts">
import { reactive, ref } from 'vue';
import { IPlayerData } from '../models/IPlayerData';

const playerData = ref<IPlayerData>({playerName: ""})

const state = reactive({ player:'Player X'})

const saveName = () => {
    state.player = 'Player O:'

    //save from input
}

const handleSubmit = () => {
    console.log(playerData.value.playerName);
    localStorage.setItem('playerName', playerData.value.playerName)
}

</script>

<template>
    <div>
        <h1>{{ state.player }}</h1>
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="playerData.playerName">
            <button @click="saveName">Save</button>
        </form>

    </div>

</template>

<style scoped>

</style>
