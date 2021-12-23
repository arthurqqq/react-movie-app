import MovieItem from './MovieItem';
import config from '../../config.json';
import classes from './MyMoviesList.module.css';
import useQuery from '../hooks/useQuery';
import useFetch from '../hooks/useFetch';

function SearchMovies() {
  let query = useQuery();
  let searchValue = query.get("q");
  let content = null;
  let url = `${config.BASE_URL}search/multi?api_key=${config.IMDB_KEY}&query=${searchValue}"&page=1`;
  url = encodeURI(url);
  const { movies, loading, error } = useFetch(url);

  if (error) {
    console.error(error);
  }

  function movieItem(movie) {
    return (
      <MovieItem
      key={movie.id}
      id={movie.id}
      title={movie.title}
      image={`${config.IMAGE_BASE_URL}${movie.poster_path}`}
      backdrop={`${config.IMAGE_BASE_URL}${movie.backdrop_path}`}
      overview={movie.overview}
      review={movie.vote_average}/>
    )
  }

  function checkMovie(movie) {
    return (
      movie.title !== undefined && 
      movie.poster_path !== undefined && 
      movie.poster_path !== null
    )
  }

  if (movies.length !== 0) {
    content = movies[0]['media_type'] === 'person' ?
    movies[0]['known_for']
    .filter(movie => (checkMovie(movie)))
    .map(movie => (movieItem(movie))) :
    movies
    .filter(movie => (checkMovie(movie)))
    .map(movie => (movieItem(movie)));    
  }

  return (
    <section>
      {loading ? <p>Loading...</p> :
      <div className={classes.movie_grid}>
        {content}
      </div>}
    </section>
  )
}

export default SearchMovies;