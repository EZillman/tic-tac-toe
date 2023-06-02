<script setup lang="ts">
import { ref } from "vue";
import NewGame from "./NewGame.vue";

const squares = ref(Array(9).fill(""));
const winner = ref("");
let currentPlayer = "X";
let isTie = false;

const winningPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6] 
];


const emits = defineEmits(["updateCurrentPlayer"]);

const handleSelectedSquare = (index: any) => {
    if (!winner.value && !isTie && squares.value[index] === "") {
        squares.value[index] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";

        emits("updateCurrentPlayer", currentPlayer);

        checkForWin();
        checkForTie();
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
      return;
    }
  }
};

const checkForTie = () => {
  if (squares.value.filter((square) => square === "").length === 0 && !winner.value) {
    isTie = true;
    
  }
};

const resetGame = () => {
    squares.value = Array(9).fill("");
    winner.value = "";
    isTie = false;
};


</script>

<template>

    <div v-if="winner || isTie" class="result">
      <p v-if="winner">{{ winner }} wins!</p>
      <p v-if="isTie">It's a tie!</p>
    </div>

    <div class="gameArea">
        <div
            class="square"
            v-for="(value, index) in squares"
            :key="index"
            @click="handleSelectedSquare(index)"
            :class="{ disabled: winner || isTie || squares[index] !== '' }" >
            {{ value }}
        </div>
    </div>


    <NewGame v-if="winner || isTie" @startNewGame="resetGame"></NewGame>

  
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

.disabled {
  pointer-events: none;
  background-color: #371a3a;
}

@media (max-width: 600px) {
  .gameArea {
    width: 15rem;
    height: 15rem;
  }

  .square {
    margin: 0.05rem;
    width: 4.9rem;
    height: 4.9rem;
  }
}
</style>
