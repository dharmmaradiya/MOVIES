import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "../redux/actions/movieActions";

export default function MovieDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { details } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieDetails(id));
  }, [dispatch, id]);

  if (!details) {
    return (
      <div className="container mt-5 text-center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0">
        <div className="row g-0">

          <div className="col-md-4">
            <img
              src={details.image}
              alt={details.title}
              className="img-fluid rounded-start"
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">

              <h2 className="fw-bold">{details.title}</h2>

              <hr />

              <h5> Rating : {details.rating}</h5>

              <h5> Release Date : {details.release_date}</h5>

              <h5> Language : {details.language}</h5>

              <h5> Genre : {details.genre}</h5>

              <p className="mt-4">
                {details.description}
              </p>

                

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}