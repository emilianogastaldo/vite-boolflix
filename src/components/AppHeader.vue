<script>
import LogoHeader from './LogoHeader.vue';
import FormSearch from './FormSearch.vue';
export default {
    name: 'AppHeader',
    components: { LogoHeader, FormSearch },
    emits: ['search-movies', 'term-change']
}
</script>

<template>
    <header>
        <LogoHeader />
        <FormSearch @search-movies="$emit('search-movies')" @term-change="$emit('term-change', $event)" buttonLabel="Cerca"
            placeholder="Scrivi qui" />
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