import Modal from "../UI/Modal";
import classes from './MovieInfo.module.css';
import addButton from '../../assets/add.png';
import { useContext } from 'react';
import ListMovieContext from "../store/listMovie-context";

function MovieInfo(props) {
  const listMovieCtx = useContext(ListMovieContext);

  function addToMovieList() {
    listMovieCtx.addMovie(props.movieInfo);
  }

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.header}>
        <h1 className={classes.movie_info_title}>
          {props.movieInfo.title}
        </h1>
        <img onClick={addToMovieList} className={classes.add_button} src={addButton} alt="button" />
      </div>
      <img className={classes.movie_info_image} src={props.movieInfo.backdrop} alt="img"></img>
      <p className={classes.movie_info_overview}>{props.movieInfo.overview}</p>
      <p className={classes.movie_info_review}>{props.movieInfo.review} / 10</p>
    </Modal>
  )
}

export default MovieInfo;