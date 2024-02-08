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
        srcImg() {
            return new URL(`../assets/img/${this.lang}.png`, import.meta.url).href;
        }
    },
}
</script>

<template>
    <!-- Card singola dello show -->
    <ul>
        <li><strong>{{ title }}</strong></li>
        <li>{{ originalTitle }}</li>
        <li>
            <img v-if="isImage" class="img-fluid w-50" :src="srcImg" :alt="lang">
            <div v-else class="noflag">{{ lang }}</div>
        </li>
        <li>{{ show.vote_average }}</li>
    </ul>
</template>

<style lang="scss" scoped>
.noflag {
    height: 40px;
    width: 40px;
    background-color: blue;
}
</style>