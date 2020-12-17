import './App.css';
import requests from './requests';
import Row from "./Row"
import Banner from "./Banner"
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Nav />
      {/* banner */}
      <Banner />
      <Row  
      title="PLAYING NOW"
      fetchUrl={requests.fetchNowPlayingMovies}
      isLargeRow
      />
      <Row  title="Trending" fetchUrl={ requests.fetchTrending}/>
      <Row  title="Upcoming Movies" fetchUrl={ requests.fetchUpcomingMovies}/>
      <Row  title="Top Rated" fetchUrl={ requests.fetchTopRated}/>
      <Row  title="Popular Movies" fetchUrl={ requests.fetchPopolarMovies}/>



    </div>
  );
}

export default App;
