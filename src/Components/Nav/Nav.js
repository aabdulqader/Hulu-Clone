import React from "react";
import requests from "../../Requests";
import "./Nav.css";
const Nav = ({ setsetlectOption }) => {
  return (
    <div className="nav">
      <h2 onClick={() => setsetlectOption(requests.fetchTending)}>Trending</h2>
      <h2 onClick={() => setsetlectOption(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setsetlectOption(requests.fetchTV)}>TV</h2>
      <h2 onClick={() => setsetlectOption(requests.fetchRomanceMovie)}>
        romance
      </h2>

      <h2 onClick={() => setsetlectOption(requests.fetchActionMovies)}>
        action{" "}
      </h2>
      <h2 onClick={() => setsetlectOption(requests.fetchComedyMovies)}>
        comedy
      </h2>
      <h2 onClick={() => setsetlectOption(requests.fetchHorrorMovies)}>
        horror
      </h2>

      <h2 onClick={() => setsetlectOption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setsetlectOption(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setsetlectOption(requests.fetchSciFi)}>Sci-Fi</h2>
      <h2 onClick={() => setsetlectOption(requests.fetchAnimation)}>
        Animation
      </h2>
    </div>
  );
};

export default Nav;
