import MovieItem from './MovieItem';
import config from '../../config.json';
import classes from './MyMoviesList.module.css';
import useQuery from '../hooks/useQuery';
import useFetch from '../hooks/useFetch';

function SearchMovies() {
  let query = useQuery();
  let url = "https://api.themoviedb.org/3/search/multi?api_key=" + config.IMDB_KEY + "&query=" + query.get("q") + "&page=1";
  // console.log(url);
  const { movies, loading, error } = useFetch(url);

  if (error) {
    console.error(error);
  }

  return (
    <section>
      {loading ? <p>Loading...</p> :
      <div className={classes.movie_grid}>
        {movies.map(movie => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={`${config.IMAGE_BASE_URL}${movie.poster_path}`}
            backdrop={`${config.IMAGE_BASE_URL}${movie.backdrop_path}`}
            overview={movie.overview}
            review={movie.vote_average}
          />
        ))}
      </div>}
    </section>
  )
}

export default SearchMovies;