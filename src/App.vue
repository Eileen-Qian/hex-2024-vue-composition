<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <router-link to="/week1">week1</router-link> |
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
