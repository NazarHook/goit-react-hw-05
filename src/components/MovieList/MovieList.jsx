import  fetchMovies   from '../movies-api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import css from './MovieList.module.css'
export default function MovieList({movies}) {
    return(
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    )
}