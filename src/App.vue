<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <section>
      <RouterView/>
    </section>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
}

section {
  width: 50%;
  margin-inline: auto;
}
</style>
