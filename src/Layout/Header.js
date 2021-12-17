import { Fragment } from "react";

import mealImage from "../assets/meals.jpg"
import classes from "./Header.module.css";
//import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Movies</h1>
        <h2>
          Browse
        </h2>
        <h2>
          My list
        </h2>
        {/* <HeaderCartButton onOpen={props.onOpen} /> */}
      </header>
      {/* <div className={classes['main-image']}>
        <img src={mealImage} alt="Food"/>
      </div> */}
    </Fragment>
  );
}

export default Header;