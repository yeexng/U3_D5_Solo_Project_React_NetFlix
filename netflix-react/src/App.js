import "./App.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar.jsx";
import GenreBar from "./Components/GenreBar";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <>
      <div className="bg-dark">
        <NavBar />
        <GenreBar genre="Movies" />
        <Gallery genre="Action" query="money" />
        <Gallery genre="Kids" query="hero" />
        <Gallery genre="Romance" query="love" />
        <Footer />
      </div>
    </>
  );
}

export default App;
