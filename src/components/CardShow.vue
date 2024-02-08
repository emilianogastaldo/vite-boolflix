<script>
export default {
    name: 'CardShow',
    props: {
        show: Object,
    },
    computed: {
        title() {
            return this.show.title || this.show.name;
        },
        originalTitle() {
            return this.show.original_title || this.show.original_name;
        },
        lang() {
            return this.show.original_language;
        },
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
    <p> <strong>{{ title }}</strong></p>
    <p>{{ originalTitle }}</p>
    <img v-if="isImage" class="img-fluid w-50" :src="srcImg" :alt="lang">
    <div v-else class="noflag">{{ lang }}</div>
    <p>{{ show.vote_average }}</p>
</template>

<style lang="scss" scoped>
.noflag {
    height: 40px;
    width: 40px;
    background-color: blue;
}
</style>