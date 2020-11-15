<template>
  <div id="app">
    <RouterComponent />
  </div>
</template>

<script>
import { RouterComponent } from "./routing";

export default {
  name: 'App',
  components: { RouterComponent }
}
</script>

<style>
  body {
    font-family: 'Roboto', sans-serif;
  }
</style>
