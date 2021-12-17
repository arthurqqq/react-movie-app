import React from "react";

const ListMovieContext = React.createContext({
  movies: [],
  addMovie: (item) => {},
});

export default ListMovieContext;