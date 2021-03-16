const api_key = "e55393418d6835f6f252bf9c83335b26";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genre=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genre=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genre=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genre=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genre=99`,
};
export default requests;
