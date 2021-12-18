import { Fragment } from "react";
import classes from "./Header.module.css";
//import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Movies</h1>
        <Link to="/">
          <h2>
            Browse
          </h2>
        </Link>      
        <Link to="/my-list">
          <h2>
            My list
          </h2>
        </Link>      
        {/* <HeaderCartButton onOpen={props.onOpen} /> */}
      </header>
      {/* <div className={classes['main-image']}>
        <img src={mealImage} alt="Food"/>
      </div> */}
    </Fragment>
  );
}

export default Header;