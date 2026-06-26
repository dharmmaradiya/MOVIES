import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MovieList from "./components/Movielist";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>

      <Navbar />
      

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <MovieList />
            </PrivateRoute>
          }
        />

        <Route
          path="/search"
          element={
            <PrivateRoute>
              <MovieSearch />
            </PrivateRoute>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <PrivateRoute>
              <MovieDetails />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />

    </BrowserRouter>

    
  );
}

export default App;