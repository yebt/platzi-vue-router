<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Chat {
  id: number
  name: string
}

const chats: Chat[] = [
  { id: 1, name: 'Chat 1' },
  { id: 2, name: 'Chat 2' },
  { id: 3, name: 'Chat 3' }
]
</script>

<template>
  <main class="container">
    <aside>
      <nav>
        <ul>
          <li v-for="chat in chats" :key="chat.id">
            <RouterLink :to="`/chat/${chat.id}`">
              {{ chat.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </aside>
    <article>
      <RouterView />
    </article>
  </main>
</template>
