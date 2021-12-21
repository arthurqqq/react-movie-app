import ListMovieContext from "./listMovie-context";
import { useReducer  } from "react";

const defaultListMoviesState = {
  movies: [],
};

function myListReducer(state, action) {
  // TODO: remove movie
  if (action.type === "ADD") {
    let updatedMovies;

    // let doMovieAlreadyInList = 
    // TODO: check existing movie in the list

    updatedMovies = state.movies.concat(action.movie);
    console.log("add new movie");
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