import classes from './App.module.css';
import BrowseMovies from './components/Movies/BrowseMovies';
import Header from './components/Layout/Header';
import {
  Routes,
  Route,
} from "react-router-dom";
import MyMovieList from './components/Movies/MyMovieList';
import ListMovieProvider from './components/store/ListMovieProvider';
import SearchMovies from './components/Movies/SearchMovies';

function App() {
  return (
    <ListMovieProvider>
      <Header />
      <main className={classes.container}>
        <Routes>
          <Route path="/" element={<BrowseMovies />} />
          <Route path="/my-list" element={<MyMovieList />} />
          <Route path="/search" element={<SearchMovies />} />
        </Routes>
      </main>
    </ListMovieProvider>
  );
}

export default App;
