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
        async function fetchMovies() {
            try {
                setLoader(true)
                const data = await getMovieByName(query)
                setMovies(data)
            } catch (error) {
                console.error("Error fetching movies:", error)
            } finally {
                setLoader(false)
            }
        }

        if (searchParams.has('query')) {
            const queryParams = searchParams.get('query')
            setQuery(queryParams)
        }
        fetchMovies()
    }, [searchParams])

    const handleSubmit = async (event) => {
        if (query === '') {
            return
        }
        event.preventDefault()   
        setSearchParams({ query: query })
        try {
            setLoader(true)
            const data = await getMovieByName(query)
            setMovies(data)
        } catch (error) {
            console.error("Error fetching movies:", error)
        } finally {
            setLoader(false)
        }
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
