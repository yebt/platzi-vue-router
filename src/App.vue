<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const links: [string, string][] = [
  ['Home', '/'],
  ['About', '/about'],
  ['Chat', '/chat']
]
</script>

<template>
  <header class="container-fluid">
    <nav>
      <ul>
        <li><strong>VR</strong></li>
      </ul>
      <ul>
        <li v-for="link in links" :key="link[0]">
          <RouterLink :to="link[1]">{{ link[0] }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
