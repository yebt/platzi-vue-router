<template>
  <main class="container">
    <hgroup>
      <h1>404</h1>
      <p>Page not found</p>
    </hgroup>
    <router-link role="button" :to="{ name: 'home' }">Home</router-link>
  </main>
</template>

<style scoped>
main {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
hgroup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-size: 7rem !important;
}
p {
  font-size: 2rem !important;
}
</style>
