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
    padding: 0;
    margin: 0;
    zoom: .9;
  }

  @media screen and (max-width: 1160px) {
    body {
      zoom: .75;
    }
  }

  @media screen and (max-width: 1235px) {
    body {
      zoom: .85;
    }
  }

  @media screen and (max-width: 1024px) {
    body {
      zoom: .7;
    }
  }
</style>
