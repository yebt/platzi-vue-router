<script setup lang="ts">
import { computed, ref, toRef, toRefs } from 'vue'

interface Message {
  id: number
  text: string
  autorId: number
}
const props = withDefaults(
  defineProps<{
    chatId: string
  }>(),
  {
    chatId: ''
  }
)
const { chatId } = toRefs(props)

const messages = ref<Message[]>([
  { id: 1, text: 'Hello!', autorId: 2 },
  { id: 2, text: 'Whats up!', autorId: 1 },
  { id: 3, text: 'Hey Hey Hey!', autorId: 3 }
])

const filterdMessages = computed(() => {
  return messages.value.filter((msg) => {
    // return `${msg.autorId}` === $route.params.chatId
    return `${msg.autorId}` === chatId.value
  })
})
</script>
<template>
  <section>
    <ul>
      <li v-for="msg in filterdMessages" :key="msg.id">
        {{ msg.text }}
      </li>
    </ul>
  </section>
</template>
