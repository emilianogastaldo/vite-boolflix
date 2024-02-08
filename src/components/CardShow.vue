<script>
export default {
    name: 'CardShow',
    props: {
        show: Object,
    },
    computed: {
        // Creo delle computed per i titoli e scrivere più veloce la lingua
        title() {
            return this.show.title || this.show.name;
        },
        originalTitle() {
            return this.show.original_title || this.show.original_name;
        },
        lang() {
            return this.show.original_language;
        },

        // controllo se c'è l'immagine che mi interessa
        isImage() {
            const flags = ['en', 'it'];
            return flags.includes(this.lang);
        },
        flagImg() {
            return new URL(`../assets/img/${this.lang}.png`, import.meta.url).href;
        },
        showImg() {
            return `https://image.tmdb.org/t/p/w342${this.show.poster_path}`
        },
        showVote() {
            return Math.floor(parseInt(this.show.vote_average) / 2);
        },
        maxVote() {
            return 5
        }
    },
}
</script>

<template>
    <!-- Card singola dello show -->
    <div class="show-card">
        <figure>
            <img v-if="show.poster_path" class="img-fluid" :src="showImg" :alt="title">
            <div v-else class="noflag"> NO IMMAGINE </div>
        </figure>
        <ul>
            <li>Titolo: <strong>{{ title }}</strong> </li>
            <li>Titolo originale: {{ originalTitle }}</li>
            <li>
                <img v-if="isImage" class="img-fluid w-50" :src="flagImg" :alt="lang">
                <div v-else class="noflag">{{ lang }}</div>
            </li>
            <li>
                <div class="d-flex">
                    Voto:
                    <div v-for="i in maxVote">
                        <i v-if="i <= showVote" class="fas fa-star"></i>
                        <i v-else class="far fa-star"></i>
                    </div>
                    {{ showVote }}
                </div>
            </li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quibusdam quas distinctio. Voluptatibus
                nostrum animi necessitatibus dolorum vitae nam, itaque soluta consectetur modi, fugit doloremque, architecto
                quisquam porro. Impedit, unde.
                Sint odio maiores ratione tempora a deserunt iure soluta voluptatibus reiciendis debitis voluptatum optio
                veniam magnam quae nemo, magni modi molestiae harum, quibusdam laudantium est rerum? Autem recusandae
                obcaecati quos.
                Provident iusto aut laborum libero debitis! Maiores rerum numquam aliquid fuga, quisquam vitae non beatae
                natus, earum, iure voluptatem qui ut? Perferendis pariatur distinctio explicabo commodi soluta neque nulla
                cum.
                Porro veniam veritatis tenetur pariatur explicabo rerum aliquid dolorem dolore. At nemo, doloremque, cum
                debitis ipsa quod necessitatibus esse illum blanditiis culpa quo accusantium itaque suscipit eveniet
                inventore amet nisi?
                Tempora dolorum consequuntur iusto. Tenetur quas est ratione aliquam? Blanditiis, repudiandae. Autem maxime
                dolore sed, perspiciatis quia similique modi exercitationem nulla, maiores ullam consequatur corrupti
                consequuntur error numquam vel voluptatum?
                Et illo alias excepturi sint est architecto nihil odit! Quisquam alias, delectus eos nam totam
                exercitationem quo voluptas modi et. Molestias aliquid et voluptatem consectetur quaerat vitae nulla, libero
                at?
                Ea, eaque facilis quae, dolorem soluta alias assumenda excepturi ducimus consequatur nam ullam architecto
                reiciendis. Sunt animi, saepe ipsum voluptatem soluta praesentium fugiat ut quod eos, accusantium, sequi
                quasi corporis.
                Recusandae cupiditate amet a accusantium adipisci, facere debitis saepe aliquam repudiandae autem pariatur.
                Sapiente aliquid rerum ducimus voluptates a velit labore incidunt voluptas minus iure. Quas necessitatibus
                vitae quia blanditiis.
                Impedit dolore ipsa ut voluptatem obcaecati, pariatur quisquam nobis qui beatae. Aut quaerat, obcaecati
                delectus cumque vel beatae excepturi consectetur culpa ipsam sit ullam? Quas accusantium qui nemo numquam
                assumenda.
                Mollitia libero hic fugiat iste voluptate, ipsam expedita? Ab eligendi fugit aliquam, tempora unde enim
                veniam explicabo exercitationem vitae assumenda delectus, molestiae suscipit sequi nesciunt quas minus
                molestias ipsam temporibus.</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.noflag {
    background-color: blueviolet;
}

.show-card ul {
    height: 400px;
    list-style-type: none;
    display: none;
    overflow-y: auto;
    background-color: lightcoral;
}

.show-card:hover figure {
    display: none;
}

.show-card:hover ul {
    display: block;
}
</style>