import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import NavBar from "./components/NavBar";
import Events from "./pages/events/Events";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <div className="App">
        <h1 className="siteHeader">[NEEDANAME]</h1>
        <Routes className = "mainBody">
          <Route path="/events" element={<Events />}/>
          <Route path="/about" />
          <Route path="/gameslist" />
          <Route path="/" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
