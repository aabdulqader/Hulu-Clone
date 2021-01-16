import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import "./Results.css";
import VideoCard from "../VideoCard/VideoCard";
import axios from "../../axios";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
