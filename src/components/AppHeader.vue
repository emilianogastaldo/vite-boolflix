<script>
export default {
    name: 'AppHeader',
    data: () => ({
        inputSearch: '',
    }),
    emits: ['search-movies']
}
</script>

<template>
    <header>

        <form @submit.prevent="$emit('search-movies', inputSearch)" id="searchBar">
            <input type="text" placeholder="cerca" v-model.trim="inputSearch">
            <button>Cerca</button>
        </form>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
}
</style>