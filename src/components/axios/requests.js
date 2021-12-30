import config from '../../config.json';

const requests = [
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

export default requests;