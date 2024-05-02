import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import Layout from '../Layout/Layout'
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'))
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'))
const MovieCast = lazy(() => import('../MovieCast/MovieCast'))
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'))
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
