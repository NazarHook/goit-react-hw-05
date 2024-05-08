import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByName } from "../../components/movies-api";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const params = searchParams.get('query');
        if (params !== query) {
            setQuery(params || '');
        }
    }, [searchParams]); 

    useEffect(() => {
        const fetchMovies = async () => {
            if (query === '') return;
            
            try {
                setLoader(true);
                const data = await getMovieByName(query);
                if (data.length > 0) {
                    setMovies(data);
                } else {
                    setMovies([]);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoader(false);
            }
        };

        fetchMovies();
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
            {movies.length > 0 ? <MovieList movies={movies} /> : <ErrorMessage />}
        </div>
    );
}
