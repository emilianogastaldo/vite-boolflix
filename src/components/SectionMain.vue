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
    <section>
        <h4 v-if="shows.length">{{ title }}</h4>
        <div class="row flex-nowrap">
            <div class="col" v-for="show in shows" :key="show.id">
                <CardShow :show="show" :maxVote="5" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding-top: 100px;
}
</style>