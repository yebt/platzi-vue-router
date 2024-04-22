<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// const links: [string, string][] = [
//   ['Home', '/'],
//   ['About', '/about'],
//   ['Chat', '/chat']
// ]
// use named routes

const isTest = import.meta.env.VITE_STAGE === 'test'

const links: [string, string][] = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Chat', 'chats'],
  ['Session', 'session']
]
if (isTest) links.push(['Profile', 'profile'])
</script>

<template>
  <header class="container-fluid">
    <nav>
      <ul>
        <li><strong>VR</strong></li>
      </ul>
      <ul>
        <li v-for="link in links" :key="link[0]">
          <RouterLink :to="{ name: link[1] }">{{ link[0] }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
