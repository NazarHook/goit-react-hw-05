import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import Layout from '../Layout/Layout'
import HomePage from '../../pages/HomePage/HomePage'
import MoviesPage from '../../pages/MoviesPage/MoviesPage'
import MovieReviews from '../MovieReviews/MovieReviews'
import MovieCast from '../MovieCast/MovieCast'
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
   <Layout>
    <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path='/movies' element={<MoviesPage/>} />
     <Route path='/movies/:movieId' element={<MovieDetailsPage/>}>
      <Route path='cast' element={<MovieCast/>}/>
      <Route path='reviews' element={<MovieReviews/>}/>
     </Route>
     <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </Layout>
  )
}

export default App
