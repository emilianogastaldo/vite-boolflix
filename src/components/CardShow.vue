<script>
import axios from 'axios';
import { api } from '../store/index';
export default {
    name: 'CardShow',
    props: {
        id: Number,
        title: String,
        originalTitle: String,
        overview: String,
        voteAverage: Number,
        lang: String,
        posterPath: String || null,
        maxVote: Number,
        endpoint: String
    },
    data: () => ({
        castList: [],
    }),
    methods: {
        fetchCast() {
            const { baseUri, apiKey } = api;
            axios.get(`${baseUri}/${this.endpoint}/${this.id}/credits?api_key=${apiKey}`).then(
                res => {
                    this.castList = res.data.cast.slice(0, 5).map(c => ({
                        id: c.id,
                        name: c.name
                    }))
                }
            ).catch(err => {
                console.error(err);
            })
        },
    },
    created() {
        this.fetchCast()
    },
    computed: {
        // Creo delle computed per i titoli e scrivere più veloce la lingua
        // controllo se c'è l'immagine che mi interessa, mi devo scrivere quali immagini io abbia
        isImage() {
            const flags = ['en', 'it'];
            return flags.includes(this.lang);
        },
        flagImg() {
            return new URL(`../assets/img/${this.lang}.png`, import.meta.url).href;
        },

        showImg() {
            return `https://image.tmdb.org/t/p/w342${this.posterPath}`
        },
        showVote() {
            return Math.floor(parseInt(this.voteAverage) / 2);
        },
        castListString() {
            let message = '';
            this.castList.forEach(e => (
                message += e.name + ', '
            ))
            return message
        }

    },
}
</script>

<template>
    <!-- Card singola dello show -->
    <div class="show-card">
        <div class="show-img">
            <img v-if="posterPath" class="img-fluid d-block" :src="showImg" :alt="title">
            <img v-else src="https://www.altavod.com/assets/images/poster-placeholder.png" :alt="title">
        </div>
        <ul>
            <li><strong>Title: </strong>{{ title }}</li>
            <li><strong>Original Title: </strong>{{ originalTitle }}</li>
            <li><strong>Overview: </strong>{{ overview }}</li>
            <li><strong>Cast: </strong>{{ castListString }}</li>
            <li>
                <img v-if="isImage" class="img-fluid w-25" :src="flagImg" :alt="lang">
                <div v-else class="noflag">Lenguage: {{ lang }}</div>
            </li>
            <li>
                <span><strong>Vote: </strong></span>
                <i v-for="i in maxVote" :key="i" class="fa-star" :class="i <= showVote ? 'fas' : 'far'"></i>
            </li>

        </ul>
    </div>
</template>

<style lang="scss" scoped>
.show-card {
    // box-shadow: 1px 1px 1px black;
    width: 340px;
    border: 1px solid white;
}

.show-card ul {
    height: 500px;
    margin: 0;
    display: none;
    list-style-type: none;
    overflow-y: auto;
    padding: 0 1rem;

    li {
        margin: 1rem 0;
    }
}

.show-img {
    margin: 0;
    padding: 0;

    img {
        width: 340px;
        height: 500px;
        object-fit: cover;
    }
}

.show-card:hover .show-img {
    display: none;
}

.show-card:hover ul {
    display: block;
}
</style>