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
    <form @submit.prevent="$emit('search-movies')" id="searchBar">
        <input type="text" placeholder="cerca" v-model.trim="inputSearch">
        <button>Cerca</button>
    </form>
</template>

<style lang="scss" scoped></style>