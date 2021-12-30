import config from '../../config.json';
import useFetch from '../hooks/useFetch';
import MovieItem from './MovieItem';
import classes from "./RowMovies.module.css"
import React from 'react';

function RowMovies(props) {
  const { movies, loading, error } = useFetch(props.url);
  let content = null;

  if (error) {
    console.error(error);
  }

  if (movies.length !== 0) {
    content = 
      movies.map((movie) => (
        <MovieItem 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          image={`${config.IMAGE_BASE_URL}${movie.poster_path}`}
          backdrop={`${config.IMAGE_BASE_URL}${movie.backdrop_path}`}
          overview={movie.overview}
          review={movie.vote_average}
        />
      ));
  }

  return (
    <div className={classes.row}>
      <h1>{props.title}</h1>
      {loading ? <p>Loading...</p> :
      <div className={classes.row_movies}>
        {content}
      </div>}
    </div>
  )
}

export default RowMovies;