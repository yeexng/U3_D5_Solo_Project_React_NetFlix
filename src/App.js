import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar.jsx";
import GenreBar from "./Components/GenreBar";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TVShows from "./Components/TVShows";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <>
      <div className="bg-dark">
        <BrowserRouter>
          <NavBar />
          <GenreBar genre="Movies" />
          <Routes>
            <Route element={<Gallery genre="Action" />} path="/" />
          </Routes>
          <Routes>
            <Route
              element={<Gallery genre="Kids" query="cartoon" />}
              path="/"
            />
          </Routes>
          <Routes>
            <Route
              element={<Gallery genre="Romance" query="love" />}
              path="/"
            />
          </Routes>
          <Routes>
            <Route element={<TVShows />} path="/tv-shows" />
            <Route element={<MovieDetails />} path="/:movieId" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
