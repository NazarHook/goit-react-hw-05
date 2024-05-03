import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom" 
import { getMovieByName } from "../../components/movies-api"
import Loader from "../../components/Loader/Loader"
import MovieList from "../../components/MovieList/MovieList"

export default function MoviesPage() {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')
    const [loader, setLoader] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        async function fetchMovies () {
            if (query.trim() !== '') {
                setLoader(true)
                try {
                    const data = await getMovieByName(query)
                    setMovies(data)
                } catch (error) {
                    console.error("Error fetching movies:", error)
                }
                finally{
                    setLoader(false)
                }
            }
        }
        
        fetchMovies()
    }, [query, searchParams]) 

    const handleSubmit = async (event) => {
        event.preventDefault()   
        setSearchParams({ query: query })
        setQuery('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {loader && <Loader />}
            <MovieList movies={movies} />
        </div>
    )
}
