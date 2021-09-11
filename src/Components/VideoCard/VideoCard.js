import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";
const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={2}
        element="p"
        truncateText="…"
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stars">
        <span className={movie.media_type ? "videoCard__category" : ""}>
          <strong>{movie.media_type && `${movie.media_type}`}</strong>
        </span>
        <span className="videoCard__date">
          {movie.release_date || movie.first_air_date}
        </span>
        <span className="videoCard__likes">
          <ThumbUpAltSharpIcon />
          <span>{movie.vote_count}</span>
        </span>
      </p>
    </div>
  );
}); 

export default VideoCard;
//h
