<script setup lang="ts">


</script>

<template>
  <header>
    <h1>Tic Tac Toe</h1>
  </header>

  <main>
    <RouterView></RouterView>
  </main>

</template>

<style scoped>
header {
  position: relative;
  top: -3rem;
  font-family: "Audiowide", sans-serif;
}

main {
  padding: 2rem;
  background-color: #1a1a1a65;
  border: 0.2rem #1a1a1a solid;
  border-radius: 0.5rem;
}

@media (max-width: 600px) {
  main {
    padding: 1rem;
  }
}
</style>
