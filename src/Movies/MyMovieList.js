import { useContext } from 'react';
import ListMovieContext from "../store/listMovie-context";
import MovieItem from './MovieItem';
import config from '../config.json';
import classes from './MyMoviesList.module.css';

function MyMovieList() {
  const listMovieCtx = useContext(ListMovieContext);

  return (
    <div className={classes.movie_grid}>
      {listMovieCtx.movies.map(movie => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          image={`${config.IMAGE_BASE_URL}${movie.image}`}
          backdrop={`${config.IMAGE_BASE_URL}${movie.backdrop}`}
          overview={movie.overview}
          review={movie.review}
        />
      ))}
    </div>
  )
}

export default MyMovieList;