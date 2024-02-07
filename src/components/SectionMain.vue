<script>
export default {
    name: 'SectionMain',
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
                <p> <strong>{{ show.title }} {{ show.name }}</strong></p>
                <p>{{ show.original_title }} {{ show.original_name }}</p>
                <p>{{ show.original_language }}</p>
                <p>{{ show.vote_average }}</p>
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