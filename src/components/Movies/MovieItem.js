import { Fragment, useState } from "react";
import classes from "./MovieItem.module.css"
import ReactDOM from "react-dom";
import MovieInfo from "./MovieInfo";

function MovieItem(props) {
  const [isMovieInfoDisplayed, setIsMovieInfoDisplayed] = useState(false)

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

  return (
    <Fragment>
      {isMovieInfoDisplayed ?
        ReactDOM.createPortal(
          <MovieInfo onClose={closeMovieHandler} movieInfo={movieInfo}/>,
          document.getElementById("overlays")
        ) : null}
        <div className={classes.movie}>
          <img onClick={openMovieInfo} src={props.image} alt="img"/> 
        </div>
    </Fragment>
  )
}

export default MovieItem;