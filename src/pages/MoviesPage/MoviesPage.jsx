import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByName } from "../../components/movies-api";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [loader, setLoader] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        async function fetchMovies() {
            try {
                setLoader(true);
                const data = await getMovieByName(query);
                if (data.length > 0) {
                    setMovies(data);
                } else {
                    <ErrorMessage></ErrorMessage>
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoader(false);
            }
        }
        if (query !== '') {
            fetchMovies();
        }
    }, [query]); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (query === '') {
            return;
        }
        setSearchParams({ query: query });
    };

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
    );
}
