<script>
import SectionMain from './SectionMain.vue';
export default {
    name: 'AppMain',
    components: { SectionMain },
    props: {
        store: Object
    }
}
</script>

<template>
    <main>
        <div class="container-fluid px-5">
            <SectionMain :shows="store.listMovies" title="Movies" endpoint="movie" />
            <SectionMain :shows="store.listTvShows" title="TV Shows" endpoint="tv" />
        </div>
    </main>
</template>

<style lang="scss" scoped></style>