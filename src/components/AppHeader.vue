<script>
import LogoHeader from './LogoHeader.vue';
export default {
    name: 'AppHeader',
    components: {
        LogoHeader
    },
    data: () => ({
        inputSearch: '',
    }),
    props: {
        buttonLabel: String,
        placeholder: String
    },
    emits: ['search-movies', 'term-change']
}
</script>

<template>
    <header>
        <LogoHeader />
        <form @submit.prevent="$emit('search-movies')" id="searchBar">
            <input @keyup="$emit('term-change', inputSearch)" type="text" :placeholder="placeholder"
                v-model.trim="inputSearch">
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
    background-color: red;
}
</style>