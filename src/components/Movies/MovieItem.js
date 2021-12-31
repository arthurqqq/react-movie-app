import { Fragment, useState, useContext } from "react";
import classes from "./MovieItem.module.css"
import ReactDOM from "react-dom";
import MovieInfo from "./MovieInfo";
import ListMovieContext from "../store/listMovie-context";

function MovieItem(props) {
  const [isMovieInfoDisplayed, setIsMovieInfoDisplayed] = useState(false)
  const listMovieCtx = useContext(ListMovieContext);

  const movieInfo = {
    id: props.id,
    title: props.title,
    image: props.image,
    overview: props.overview,
    review: props.review,
    backdrop: props.backdrop
  };

  function openMovieInfo() {
    setIsMovieInfoDisplayed(true);
  }

  function closeMovieHandler() {
    setIsMovieInfoDisplayed(false);
  }

  function addToMovieList() {
    listMovieCtx.addMovie(movieInfo);
  }

  return (
    <Fragment>
      {isMovieInfoDisplayed ?
        ReactDOM.createPortal(
          <MovieInfo onAddToMovieList={addToMovieList} onClose={closeMovieHandler} movieInfo={movieInfo}/>,
          document.getElementById("overlays")
        ) : null}
        <div className={classes.movie}>
          <img onClick={openMovieInfo} src={props.image} alt="img"/> 
        </div>
    </Fragment>
  )
}

export default MovieItem;