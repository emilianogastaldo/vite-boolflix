<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

// esempio endpointTV = 'https://api.themoviedb.org/3/search/tv?query=witcher&api_key=d0ca94f0f493b49910b826740d17bcd0';
// esempio enpointMOVIE = 'https://api.themoviedb.org/3/search/movie?query=witcher&api_key=d0ca94f0f493b49910b826740d17bcd0';
import { store } from './store/store';
import { api } from './store/index';
export default {
  name: 'BoolFlix',
  components: { AppHeader, AppMain },
  data: () => ({
    store
  }),
  methods: {
    /*
      Oltre al submit faccio un on-keyup sull'input, così da averlo sempre
      aggiornato nello store, in questa maniera posso crearmi il metodo per trovare tutti
      gli show senza parametri.
    */
    setTitleFilter(term) {
      store.titleFilter = term;
    },

    //Mi creo una funzione unica con le chiavi dinamiche per fare la chiamata per film e
    // serie tv
    fetchApi(endpoint, collection) {
      /*
        Invece di avere uno stringone tipo
        onst urlMovies = baseUri + `/search/movie?query=${store.titleFilter}&api_key=` + apiKey;
        Con axios posso scrivere in maniera più controllata e semplice con un oggetto
        con chiave params.
      */
      const { baseUri, apiKey } = api;
      const params = {
        query: store.titleFilter,
        api_key: apiKey
      };
      axios.get(`${baseUri}/${endpoint}`, { params }).then((res) => {
        store[collection] = res.data.results
      }).catch((err) => {
        console.error(err);
      });
    },

    fetchShows() {
      if (!store.titleFilter) {
        store.listMovies = [];
        store.listTvShows = [];
        return;
      }
      this.fetchApi('search/movie', 'listMovies');
      this.fetchApi('search/tv', 'listTvShows');
    }
  }
}
</script>

<template>
  <AppHeader @search-movies="fetchShows" @term-change="setTitleFilter" buttonLabel="Cerca" placeholder="Scrivi qui" />
  <AppMain :shows="store" />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
