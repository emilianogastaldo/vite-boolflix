<script>
import CardShow from './CardShow.vue'
export default {
    name: 'SectionMain',
    components: { CardShow },
    props: {
        shows: Object,
        title: String
    }
}
</script>

<template>
    <main>
        <h4 v-if="shows.length">{{ title }}</h4>
        <div class="row">
            <div class="col-2" v-for="show in shows" :key="show.id">
                <!-- <p>{{ show }}</p> -->
                <CardShow :show="show" />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    padding-top: 100px;
}

.row {
    flex-wrap: nowrap;
}
</style>