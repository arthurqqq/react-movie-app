import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header(props) {
  return (
    <header className={classes.header}>
      <h1>React Movies</h1>
      <h2>
        <Link to="/">
          Browse Movies
        </Link>
      </h2>
      <h2 className={classes.elemSpace}>
        <Link to="/my-list">
          My list
        </Link>      
      </h2>
      <SearchBar />
    </header>
  );
}

export default Header;