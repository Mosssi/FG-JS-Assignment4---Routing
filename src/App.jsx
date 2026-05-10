import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Genres from './pages/Genres/Genres';
import GenreDetails from './pages/GenreDetails/GenreDetails'
import About from './pages/About/About';


function App() {
  return (
    <Routes>

      <Route path="/" element={<RootLayout />}>

      <Route index element={<Home />} />
      <Route path="about" element ={<About /> } />

      <Route path="genres" element={<Genres />}>
        <Route path=":id" element={<GenreDetails />} />
      </Route>
      
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:id" element={<MovieDetails />} />
      
      </Route>
    </Routes>
  )
}

export default App
