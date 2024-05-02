import { useEffect, useState } from "react"
import MovieList from "../../components/MovieList/MovieList"
import fetchMovies from "../../components/movies-api"
import Loader from "../../components/Loader/Loader"
export default function HomePage() {
    const [movies, setMovies] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
      async function getMovies() {
        try {
          setLoader(true)
          const data = await fetchMovies();
          setMovies(data)
        } catch (error) {
          console.log(error);
        }
       finally {
        setLoader(false)
       }
      }
      getMovies()
    }, [])
    return (
        <div>
<h1>Trending today</h1>
{loader && <Loader></Loader>}
        <MovieList movies={movies}></MovieList>
        </div>
        
    )
}