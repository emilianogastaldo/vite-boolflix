<script>
export default {
    name: 'FormSearch',
    props: {
        buttonLabel: String,
        placeholder: String
    },
    data: () => ({
        inputSearch: '',
    }),
    emits: ['search-movies', 'term-change']
}
</script>

<template>
    <form @submit.prevent="$emit('search-movies')" id="searchBar">
        <input @keyup="$emit('term-change', inputSearch)" type="text" :placeholder="placeholder" v-model.trim="inputSearch">
        <button>{{ buttonLabel }}</button>
    </form>
</template>

<style lang="scss" scoped></style>