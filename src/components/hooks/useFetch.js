import { useEffect, useState } from "react";

function useFetch(url) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {(
    async function() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
        // console.table(data.results);
      }
      catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })()
  }, [url]);

  return {movies, loading, error}
}

export default useFetch;