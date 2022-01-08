const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'fdaee2f0bca4a9ecaf293b5487d87dbe'

async function FetchMovies() {
  const Trending = await fetch(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  )

  const KidsAndFamily = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
  )

  const Recommended = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en=US`
  )

  const Hindi = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en=US`
  )

  return {
    Trending: await Trending.json(),
    KidsAndFamily: await KidsAndFamily.json(),
    Recommended: await Recommended.json(),
    Hindi: await Hindi.json(),
  }
}

export default FetchMovies

// const requests = {
//     fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetFlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//     }
