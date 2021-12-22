import ListMovieContext from "./listMovie-context";
import { useReducer  } from "react";

const defaultListMoviesState = {
  movies: [],
};

function myListReducer(state, action) {
  // TODO: remove movie
  if (action.type === "ADD") {
    let updatedMovies;

    // check existing movie in the list
    let isMovieInList = state.movies.some(elem => (
      elem["id"] === action.movie.id
    ));

    if (!isMovieInList) {
      updatedMovies = state.movies.concat(action.movie);
      console.log("add new movie");
    } else
      updatedMovies = [...state.movies]

    return {
      movies: updatedMovies
    }
  }
  return defaultListMoviesState;
}

function ListMovieProvider(props) {

  function addMovieToList(movie) {
    dispatchListMovieAction({
      type: 'ADD',
      movie: movie
    });
  }

  const [listMoviesState, dispatchListMovieAction] = useReducer(
    myListReducer,
    defaultListMoviesState
  );

  const movieContext = {
    movies: listMoviesState.movies,
    addMovie: addMovieToList,
  };

  return (
    <ListMovieContext.Provider value={movieContext}>
      {props.children}
    </ListMovieContext.Provider>
  )
}

export default ListMovieProvider;