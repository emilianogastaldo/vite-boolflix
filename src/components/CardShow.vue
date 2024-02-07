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
    <img class="img-fluid w-50" :src="getUrlImg" :alt="show.original_language">
    <p>{{ show.vote_average }}</p>
</template>

<style lang="scss" scoped></style>