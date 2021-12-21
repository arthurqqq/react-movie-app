import classes from './SearchBar.module.css';
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  function confirmSearch(event) {
    // event.preventDefault();
    if (event.key === 'Enter') {
      // console.log(event.target.value);
      // navigate("/search/" + event.target.value)
      if (event.target.value !== "")
        navigate("/search?q=" + event.target.value)
    }
  }

  return (
    <input className={classes.inputSearchBar} 
    placeholder="Title, people, genres..."
    onKeyDown={confirmSearch}/>
  )
}

export default SearchBar;