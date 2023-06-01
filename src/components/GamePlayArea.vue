<script setup lang="ts">
import { ref } from "vue";

const squares = ref(Array(9).fill(''));

const handleSelectedSquare = (index: any) => {
    if (squares.value[index] === "") {
        squares.value[index] = "X";
    }
};


</script>

<template>
    <div class="gameArea">
        <div
            class="square"
            v-for="(value, index) in squares"
            :key="index"
            @click="handleSelectedSquare(index)" >
            {{ value }}
        </div>
    </div>

  
</template>

<style scoped>

.gameArea {
    display: flex;
    flex-wrap: wrap;
    width: 15rem;
    height: 15rem;
    background-color: #bcbcbc;
}

.square {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    font-size: 2rem;
    cursor: pointer;
    background-color: #1b1b1b;
}

</style>
