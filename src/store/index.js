
const api = {
    baseUri: 'https://api.themoviedb.org/3',
    apiKey: 'd0ca94f0f493b49910b826740d17bcd0'
}

const mapProductions = p => ({
    id: p.id,
    title: p.name || p.title,
    originalTitle: p.original_name || p.original_title,
    overview: p.overview,
    voteAverage: p.vote_average,
    lang: p.original_language,
    posterPath: p.poster_path,
    genreIds: p.genre_ids
})
export { api, mapProductions }