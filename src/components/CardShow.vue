<script>
export default {
    name: 'CardShow',
    props: {
        show: Object,
    },
    computed: {

        getUrlImg() {
            return new URL(`../assets/img/${this.show.original_language}.png`, import.meta.url).href
        }
    },
}
</script>

<template>
    <p> <strong>{{ show.title }} {{ show.name }}</strong></p>
    <p>{{ show.original_title }} {{ show.original_name }}</p>
    <img v-if="show.original_language == 'en' || show.original_language == 'it'" class="img-fluid w-50" :src="getUrlImg"
        :alt="show.original_language">
    <div v-else class="noflag">{{ show.original_language }}</div>
    <p>{{ show.vote_average }}</p>
</template>

<style lang="scss" scoped>
.noflag {
    height: 40px;
    width: 40px;
    background-color: blue;
}
</style>