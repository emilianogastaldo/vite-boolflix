<script>
export default {
    name: 'AppMain',
    props: {
        movies: Object
    }
}
</script>

<template>
    <main>
        <div v-for="(movie, i) in movies" :key="movie.id">
            <p>movie</p>
            <p>{{ movie.title }}</p>
            <p>{{ movie.original_title }}</p>
            <p>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>