<script>
export default {
    name: 'CardShow',
    props: {
        show: Object,
        maxVote: Number,
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

        // controllo se c'è l'immagine che mi interessa, mi devo scrivere quali immagini io abbia
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
    },
}
</script>

<template>
    <!-- Card singola dello show -->
    <div class="show-card">
        <div class="show-img">
            <img v-if="show.poster_path" class="img-fluid d-block" :src="showImg" :alt="title">
            <div v-else class="noflag">NO IMG</div>
        </div>
        <ul>
            <li><strong>Titolo: </strong>{{ title }}</li>
            <li><strong>Titolo originale: </strong>{{ originalTitle }}</li>
            <li>
                <img v-if="isImage" class="img-fluid w-25" :src="flagImg" :alt="lang">
                <div v-else class="noflag">Lingua: {{ lang }}</div>
            </li>
            <li>
                <div class="d-flex gap-2">
                    Voto:
                    <div v-for="i in maxVote" :key="i">
                        <i v-if="i <= showVote" class="fas fa-star"></i>
                        <i v-else class="far fa-star"></i>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.show-card {
    // box-shadow: 1px 1px 1px black;
    width: 300px;
    height: 450px;
}

.show-card ul {
    height: 450px;
    margin: 0;
    display: none;
    list-style-type: none;
    overflow-y: auto;
    background-color: darkgray;
    padding: 0 1rem;

    li {
        margin: 1rem 0;
    }
}

.show-img {
    margin: 0;
    padding: 0;
}

.show-card:hover .show-img {
    display: none;
}

.show-card:hover ul {
    display: block;
}
</style>