<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'


const endpoint = 'https://api.themoviedb.org/3/search';
const apiKey = '&api_key=d0ca94f0f493b49910b826740d17bcd0';
// const endpointTV = 'https://api.themoviedb.org/3/search/tv?query=witcher&api_key=d0ca94f0f493b49910b826740d17bcd0';
// const enpointMOVIE = 'https://api.themoviedb.org/3/search/movie?query=witcher&api_key=d0ca94f0f493b49910b826740d17bcd0';
import { store } from './store/store'
export default {
  name: 'BoolFlix',
  components: { AppHeader, AppMain },
  data: () => ({
    store
  }),
  methods: {
    fetchShows(input) {
      if (!input) return;
      const urlMovies = endpoint + `/movie?query=${input}` + apiKey;
      const urlTvShows = endpoint + `/tv?query=${input}` + apiKey;
      axios.get(urlMovies).then(res => {
        store.listMovies = res.data.results
      });
      axios.get(urlTvShows).then(res => {
        store.listTvShows = res.data.results
      });
    }
  },
  // created() {
  //   this.fetchMovies();
  // }

}
</script>

<template>
  <AppHeader @search-movies="fetchShows" />
  <AppMain :shows="store" />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
