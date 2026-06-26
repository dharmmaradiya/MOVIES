import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../redux/actions/movieActions";
import { Link } from "react-router-dom";

export default function MovieSearch() {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);

  const handleSearch = () => {
    dispatch(searchMovies(search));
  };

  const sortedMovies = [...movies];

  if (sortType === "az") {
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortType === "za") {
    sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (sortType === "rating") {
    sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
  }

  if (sortType === "date") {
    sortedMovies.sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    );
  }

  return (
    <div className="container mt-4">

      <div className="row mb-4">

        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search Movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-success w-100"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="col-md-2">
          <select
            className="form-select"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="rating">Rating</option>
            <option value="date">Release Date</option>
          </select>
        </div>

      </div>

      <div className="row">

        {sortedMovies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>

            <div className="card h-100 shadow">

            

              <div className="card-body">
      

                <h5>{movie.title}</h5>

                <p>
                   {movie.vote_average}
                </p>

                <p>
                   {movie.release_date}
                </p>

                <Link
                  to={`/movie/${movie.id}`}
                  className="btn btn-primary w-100"
                >
                  Details
                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}