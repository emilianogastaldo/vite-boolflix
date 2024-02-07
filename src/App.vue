<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
// const endpoint = 'https://api.themoviedb.org/3/search';
const endpoint = 'https://api.themoviedb.org/3/search/tv?query=witcher&api_key=d0ca94f0f493b49910b826740d17bcd0';
import { store } from './store/store'
export default {
  name: 'BoolFlix',
  components: { AppHeader },
  data: () => ({
    store
  }),
  methods: {
    fetchMovies() {
      axios.get(endpoint).then(res => {
        store.listMovies = res.data.results
      })
    }
  }

}
</script>

<template>
  <AppHeader @search-movies="fetchMovies" />
  <h1 class="text-center">ciao</h1>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
