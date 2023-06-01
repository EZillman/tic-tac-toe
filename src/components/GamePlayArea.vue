<script setup lang="ts">
import { ref } from "vue";

const squares = ref(Array(9).fill(""));
let currentPlayer = "X";
const winner = ref("");

const winningPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6] 
];


const emits = defineEmits(["updateCurrentPlayer"]);

const handleSelectedSquare = (index: any) => {
    if (squares.value[index] === "") {
        squares.value[index] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";

        emits("updateCurrentPlayer", currentPlayer);

        checkForWin();
    }
};

const checkForWin = () => {
  for (const pattern of winningPatterns) {
    const [squareA, squareB, squareC] = pattern;
    if (
      squares.value[squareA] !== "" &&
      squares.value[squareA] === squares.value[squareB] &&
      squares.value[squareB] === squares.value[squareC]
    ) {
      winner.value = squares.value[squareA]; 
      console.log("a win");
      return;
    }
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
    width: 30rem;
    height: 30rem;
    background-color: #585858;
}

.square {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.1rem;
    width: 9.8rem;
    height: 9.8rem;
    font-size: 2rem;
    cursor: pointer;
    background-color: #1b1b1b;
}

</style>
