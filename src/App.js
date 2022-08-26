import "./App.css";
import Row from "./components/Row";
import requests from "./function/request";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

// Api key https://api.themoviedb.org/3/movie/550?api_key=5c85f223273633cc52d7c3bb48cd78a5

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      {/* <Row title="Horror" fetchURL={requests.fetchHorrorMovies} /> */}
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchURL={requests.fetchDocumentries} />
    </div>
  );
}

export default App;
