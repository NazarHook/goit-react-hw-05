import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import { getMovieById } from "../movies-api"
export default function MovieReviews() {
    const [reviews, setReviews] = useState([])
   const {movieId} = useParams()
   useEffect(() => {
     async function getReviews() {
        try {
            const data = await getMovieById(`${movieId}/reviews`)
            setReviews(data.results)
        } catch (error) {
            console.log(error);
        }
     }
     getReviews()
   }, [movieId])
   console.log(reviews);
    return (
        <div>
            {reviews.length > 0 ? <ul>
        {reviews.map(review => (
            <li>
                <b>Author: {review.author}</b>
<p>{review.content}</p>
            </li>
        ))}
       </ul> : 'No reviews'}
        </div>
      
    )
}