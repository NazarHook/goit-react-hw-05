import { Link, useLocation  } from 'react-router-dom'
import css from './MovieCard.module.css'
export default function MovieCard({ movie:{ title, overview, poster_path, genres }}) {
    const genresNames = genres.map(genre => (genre.name))
    const location = useLocation()
        return (
            <div>
               <div className={css.infoWrapper}>
               <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
               <div>
                <h1>{title}</h1>
                <p>User Score:</p>
                <h3>Overview</h3>
                <p>{overview}</p> 
                <h4>Genres</h4>
                <p>{genresNames.join(' ')}</p>
               </div>
               <div>
               </div>
               </div>
               <p>Additional information</p>
            </div>
        );
}