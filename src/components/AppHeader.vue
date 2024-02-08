<script>
export default {
    name: 'AppHeader',
    data: () => ({
        inputSearch: '',
    }),
    props: {
        buttonLabel: String,
        placeholder: String
    },
    emits: ['search-movies']
}
</script>

<template>
    <header>
        <div class="logo">
            <a href="#">LOGO SITO</a>
        </div>
        <form @submit.prevent="$emit('search-movies', inputSearch)" id="searchBar">
            <input type="text" :placeholder="placeholder" v-model.trim="inputSearch">
            <button>{{ buttonLabel }}</button>
        </form>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 0 4rem;
    height: 100px;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo a {
        text-decoration: none;
        color: white;
        border: 1px solid white;
        padding: 1rem 2rem;
    }
}
</style>