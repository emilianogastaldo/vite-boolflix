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
            <p>{{ movie.name }}</p>
            <p>{{ movie.original_name }}</p>
            <p>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>