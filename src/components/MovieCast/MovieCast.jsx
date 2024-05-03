import fetchMovies, { getMovieById } from "../movies-api"
import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import Loader from "../Loader/Loader"
export default function MovieCast({}) {
   const [staff, setStaff] = useState([])
   const {movieId} = useParams()
   const [loader, setLoader] = useState(false)
   useEffect(() => {
     async function getStaff() {
        try {
            setLoader(true)
            const data = await getMovieById(`${movieId}/credits`)
            setStaff(data.cast)
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoader(false)
        }
     }
     getStaff()
   }, [movieId])
    return (
        <div>
            {loader && <Loader></Loader>}
 <ul>
            {staff.map(actor => (
                <li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
                    <p>{actor.name}</p>
                    </li>
            ))}
        </ul>
        </div>
       
    )
}