import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Genres from './pages/Genres/Genres';
import About from './pages/About/About';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
      
      <Route index element={<Home />} />
      <Route path="Movies" element={<Movies />} />
      <Route path="genres" element={<Genres />} />
      <Route path="about" element ={<About /> } />

      <Route path="Movies/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
