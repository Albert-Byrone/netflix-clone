import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Row  title="Trending" fetchUrl={ requests.fetchTrending}/>
      <Row  title="Upcoming Movies" fetchUrl={ requests.fetchUpcomingMovies}/>
      <Row  title="Top Rated" fetchUrl={ requests.fetchTopRated}/>
      <Row  title="Popular Movies" fetchUrl={ requests.fetchPopolarMovies}/>

    </div>
  );
}

export default App;
