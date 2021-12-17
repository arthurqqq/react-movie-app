import ListMovieContext from "./listMovie-context";

function ListMovieProvider(props) {

  function addMovieToList(movie) {
    console.log(movie);
  }

  const movieContext = {
    movies: ["first movie"],
    addMovie: addMovieToList,
  };

  return (
    <ListMovieContext.Provider value={movieContext}>
      {props.children}
    </ListMovieContext.Provider>
  )
}

export default ListMovieProvider;