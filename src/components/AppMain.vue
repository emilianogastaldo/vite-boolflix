<script>
import SectionMain from './SectionMain.vue';
export default {
    name: 'AppMain',
    components: { SectionMain },
    props: {
        shows: Object
    }
}
</script>

<template>
    <main>
        <SectionMain :shows="shows.listMovies" title="Movies" />
        <SectionMain :shows="shows.listTvShows" title="TV Shows" />
    </main>
</template>

<style lang="scss" scoped></style>