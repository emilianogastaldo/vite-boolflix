<script>
export default {
    name: 'CardShow',
    props: {
        show: Object,
    },
    computed: {
        // Creo delle computed per i titoli e scrivere più veloce la lingua
        title() {
            return this.show.title || this.show.name;
        },
        originalTitle() {
            return this.show.original_title || this.show.original_name;
        },
        lang() {
            return this.show.original_language;
        },

        // controllo se c'è l'immagine che mi interessa
        isImage() {
            const flags = ['en', 'it'];
            return flags.includes(this.lang);
        },
        flagImg() {
            return new URL(`../assets/img/${this.lang}.png`, import.meta.url).href;
        },
        showImg() {
            return `https://image.tmdb.org/t/p/w342${this.show.poster_path}`
        },
        showVote() {
            return Math.floor(parseInt(this.show.vote_average) / 2);
        },
        maxVote() {
            return 5
        }
    },
}
</script>

<template>
    <!-- Card singola dello show -->
    <ul>
        <li>
            <img v-if="show.poster_path" class="img-fluid" :src="showImg" :alt="title">
            <div v-else class="noflag"> NO IMMAGINE </div>
        </li>
        <li><strong>{{ title }}</strong> </li>
        <li>{{ originalTitle }}</li>
        <li>
            <img v-if="isImage" class="img-fluid w-50" :src="flagImg" :alt="lang">
            <div v-else class="noflag">{{ lang }}</div>
        </li>
        <li>
            <div v-for="n in showVote" :key="n">
                <i class="fas fa-star"></i>
            </div>
            <div v-for="n in maxVote - showVote" :key="n">
                <i class="far fa-star"></i>
            </div>
            {{ showVote }}
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.noflag {

    background-color: blueviolet;
}
</style>