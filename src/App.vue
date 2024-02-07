<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
const endpoint = 'https://api.themoviedb.org/3/search';
export default {
  name: 'BoolFlix',
  components: { AppHeader }
}
</script>

<template>
  <AppHeader />
  <h1 class="text-center">ciao</h1>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
