import "./App.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar.jsx";
import GenreBar from "./Components/GenreBar";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="bg-dark">
        <NavBar />
        <GenreBar genre="Movies" />
        <Carousel />
        <Carousel />
        <Carousel />
        <Footer />
      </div>
    </>
  );
}

export default App;
