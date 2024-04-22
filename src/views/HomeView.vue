<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

const login = () => {
  // router.push('/chat')
  router.push({
    path: '/chat',
    // Add Query Params
    query: {
      var1: 'value1'
    },
    // replace the current route without adding a new history entry
    replace: true
  })
  // Replace
  // router.replace('/chat')
  // Go to history step
  // router.go(1)
  // router.go(-1)
}
</script>

<template>
  <main class="container">
    <h1>Home</h1>
    <form @submit.prevent="login">
      <fieldset>
        <label>
          <span>Username</span>
          <input
            name="username"
            placeholder="Username"
            autocomplete="username"
            v-model="username"
          />
          <small>Enter your username or email used for login.</small>
        </label>
        <label>
          <span>Password</span>
          <input
            name="Password"
            placeholder="Password"
            autocomplete="password"
            v-model="password"
          />
        </label>
      </fieldset>

      <input type="submit" value="Login" />
    </form>
  </main>
</template>

<style scoped>
.container {
  max-width: 475px;
}
</style>
