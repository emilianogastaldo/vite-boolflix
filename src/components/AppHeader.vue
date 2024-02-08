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

        <form @submit.prevent="$emit('search-movies', inputSearch)" id="searchBar">
            <input type="text" :placeholder="placeholder" v-model.trim="inputSearch">
            <button>{{ buttonLabel }}</button>
        </form>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
}
</style>