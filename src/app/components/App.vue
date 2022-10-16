<template>
  <div>some {{ test }}</div>
</template>
<script lang="ts" setup>
  const test = 'test'
</script>
<style lang="scss">
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    height: 100%;
    width: auto;
  }

  .test {
    height: 100%;
  }
</style>