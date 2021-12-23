import classes from './SearchBar.module.css';
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  function confirmSearch(event) {
    if (event.key === 'Enter') {
      // console.log(event.target.value);
      if (event.target.value !== "") {
        let destination = "/search?q=" + event.target.value;
        // console.log("destination: " + destination);
        navigate(destination);
      }
    }
  }

  return (
    <input className={classes.inputSearchBar} 
      placeholder="Title, people..."
      onKeyDown={confirmSearch}
    />
  )
}

export default SearchBar;