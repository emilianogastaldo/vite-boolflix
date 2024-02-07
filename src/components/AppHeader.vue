<script>
export default {
    name: 'AppHeader',
    data: () => ({
        inputSearch: '',
    })
}
</script>

<template>
    <form id="searchBar">
        <input type="text" placeholder="cerca" v-model.trim="inputSearch">
        <button>Cerca</button>
    </form>
</template>

<style lang="scss" scoped></style>