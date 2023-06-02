<script setup lang="ts">

const emits = defineEmits(["startNewGame"]);

const startNewGame = () => {
    emits("startNewGame");
};


</script>

<template>
 <button @click="startNewGame">Start new game</button>
  
</template>

<style scoped>


</style>
