import RowMovies from './RowMovies';
import config from '../../config.json';
import React from 'react';

const allRows = [
  {
    url: `${config.BASE_URL}movie/popular?api_key=${config.IMDB_KEY}`,
    title: "Popular movies",
    id: 0
  },
  {
    url: `${config.BASE_URL}discover/movie?api_key=${config.IMDB_KEY}&with_genres=18`,
    title: "Drama",
    id: 1
  },
  {
    url: `${config.BASE_URL}discover/movie?api_key=${config.IMDB_KEY}&with_genres=16`,
    title: "Animation",
    id: 2
  },
  {
    url: `${config.BASE_URL}discover/movie?api_key=${config.IMDB_KEY}&with_genres=35`,
    title: "Comedy",
    id: 3
  },
  {
    url: `${config.BASE_URL}discover/movie?api_key=${config.IMDB_KEY}&with_genres=27`,
    title: "Horror",
    id: 4
  },
  {
    url: `${config.BASE_URL}discover/movie?api_key=${config.IMDB_KEY}&with_genres=28`,
    title: "Action",
    id: 5
  },
  {
    url: `${config.BASE_URL}discover/movie?api_key=${config.IMDB_KEY}&with_genres=53`,
    title: "Thriller",
    id: 6
  }
]

function BrowseMovies() {
  return (
    <section>
      {allRows.map(elem => <RowMovies key={elem.id} title={elem.title} url={elem.url}/>)}
    </section>
  )
}

export default BrowseMovies;