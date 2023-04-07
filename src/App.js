import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import NavBar from "./components/NavBar";
import Events from "./pages/events/Events";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Games from "./pages/games/Games";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <div className="App">
        <Routes className = "mainBody">
          <Route path="/events" element={<Events />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/gameslist" element={<Games />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
