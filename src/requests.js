const API_KEY='d579b007d5b6ec63728a5a41b4636a7b';

const requests = {
    // fetchNetflixOrigins: `https://api.themoviedb.org/3/discover/tv??api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopolarMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNowPlayingMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests;