import MovieItem from './MovieItem';
import config from '../../config.json';
import classes from './MyMoviesList.module.css';
import useQuery from '../hooks/useQuery';
import useFetch from '../hooks/useFetch';

function SearchMovies() {
  let query = useQuery();
  let url = config.BASE_URL + "search/multi?api_key=" + config.IMDB_KEY + "&query=" + query.get("q") + "&page=1";
  const { movies, loading, error } = useFetch(url);

  if (error) {
    console.error(error);
  }

  const resultMovies = movies.filter(movie => (
    movie.title !== undefined && 
    movie.poster_path !== undefined && 
    movie.backdrop_path !== undefined && 
    movie.poster_path !== null
  )).map(movie => (
    <MovieItem
    key={movie.id}
    id={movie.id}
    title={movie.title}
    image={`${config.IMAGE_BASE_URL}${movie.poster_path}`}
    backdrop={`${config.IMAGE_BASE_URL}${movie.backdrop_path}`}
    overview={movie.overview}
    review={movie.vote_average}/>
  ));

  console.log(resultMovies);

  return (
    <section>
      {loading ? <p>Loading...</p> :
      <div className={classes.movie_grid}>
        {resultMovies}
      </div>}
    </section>
  )
}

export default SearchMovies;