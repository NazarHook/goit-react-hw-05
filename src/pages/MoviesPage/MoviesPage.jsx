import MovieList from "../../components/MovieList/MovieList"
import { useEffect, useState } from "react"
import { getMovieByName } from "../../components/movies-api"
import Loader from "../../components/Loader/Loader"
export default function MoviesPage() {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')
    const [loader, setLoader] = useState(false)
const handleSubmit = async (event) => {
    event.preventDefault()   
    setLoader(true)
    const data = await getMovieByName(query)
    setMovies(data)
    setLoader(false)
    setQuery('')
    
}
    return (
        <div>
             <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={query}
            onChange={(event) => setQuery(event.target.value.trim())}/>
            <button type="submit">Search</button>
        </form>
        {loader && <Loader></Loader>}
        <MovieList movies={movies}></MovieList>
        </div>
    )
}