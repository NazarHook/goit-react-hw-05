import { useParams, NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import { getMovieById } from '../../components/movies-api';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import Loader from '../../components/Loader/Loader';
export default function MovieDetailsPage() {
   const { movieId } = useParams();
   const [movie, setMovie] = useState(null);
   const location = useLocation();
  const backLinkURLRef = useRef(location.state ?? "/movies");
   const [loader, setLoader] = useState(false)
   useEffect(() => {
      async function getMovie() {
         try {
            setLoader(true)
            const data = await getMovieById(movieId);
            setMovie(data);
         } catch (error) {
            console.log(error);
         }
         finally {
            setLoader(false)
         }
      }
      getMovie();
   }, [movieId]);

   const isActive = (path) => {
      return location.pathname.includes(path);
   };

   return (
      <div>
{loader && <Loader></Loader>}
<Link to={backLinkURLRef.current}><button type="button">Go back</button></Link>
         {movie && <MovieCard movie={movie}></MovieCard>} 
         <ul>
            <li>
               <NavLink to={'cast'}>Cast</NavLink>
            </li>
            <li>
               <NavLink to={'reviews'}>Reviews</NavLink>
            </li>
         </ul>
         <Suspense fallback={<Loader></Loader>}>
        <Outlet />
      </Suspense>
      </div>
   );
}
