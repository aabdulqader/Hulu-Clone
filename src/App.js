import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Results from "./Components/Results/Results";
import requests from "./Requests";

function App() {
  const [setlectOption, setsetlectOption] = useState(
    requests.fetchRomanceMovies
  );

  return (
    //BEM
    <div className="app">
      <Header />
      <Nav setsetlectOption={setsetlectOption} />
      <Results selectedOption={setlectOption} />
    </div>
  );
}

export default App;
