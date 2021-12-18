import { Fragment } from 'react/cjs/react.production.min';
import classes from './App.module.css';
import Browse from './Layout/Browse';
import Header from './Layout/Header';
import {
  Routes,
  Route
} from "react-router-dom";
import MyMovieList from './Movies/MyMovieList';
import ListMovieProvider from './store/ListMovieProvider';

function App() {

  return (
    <ListMovieProvider>
      <Header />
      <main className={classes.container}>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/my-list" element={<MyMovieList />} />
      </Routes>
        {/* <Browse /> */}
      </main>
    </ListMovieProvider>
  );
}

export default App;
