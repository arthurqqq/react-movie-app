import RowMovies from '../Movies/RowMovies';
import config from '../config.json';

const allRows = [
  {
    url: config.BASE_URL + "movie/popular?api_key=" + config.IMDB_KEY,
    title: "Popular movies",
    id: 0
  },
  {
    url: config.BASE_URL + "discover/movie?api_key=" + config.IMDB_KEY + "&with_genres=18",
    title: "Drama",
    id: 1
  },
  {
    url: config.BASE_URL + "discover/movie?api_key=" + config.IMDB_KEY + "&with_genres=16",
    title: "Animation",
    id: 2
  },
  // {
  //   url: config.BASE_URL + "discover/movie?api_key=" + config.IMDB_KEY + "&with_genres=35",
  //   title: "Comedy",
  // },
  // {
  //   url: config.BASE_URL + "discover/movie?api_key=" + config.IMDB_KEY + "&with_genres=27",
  //   title: "Horror"
  // },
  // {
  //   url: config.BASE_URL + "discover/movie?api_key=" + config.IMDB_KEY + "&with_genres=28",
  //   title: "Action",
  //   id: 2
  // },
  // {
  //   url: config.BASE_URL + "discover/movie?api_key=" + config.IMDB_KEY + "&with_genres=53",
  //   title: "Thriller"
  // },
  // {
  //   url: config.BASE_URL + "tv/popular?api_key=" + config.IMDB_KEY,
  //   title: "Popular TV shows",
  //   id: 0
  // },
]

function Browse() {
  return (
    <section>
      {/* <RowMovies title="Popular TV shows" url={config.BASE_URL + "movie/popular?api_key=" + config.IMDB_KEY} /> */}
      {allRows.map(elem => <RowMovies key={elem.id} title={elem.title} url={elem.url}/>)}
    </section>
  )
}

export default Browse;