import axios from "axios";

const API = "http://localhost:3006/movies";

export const fetchMovies = () => async (dispatch) => {

    dispatch({ type: "LOADING" });

    try {

        const res = await axios.get(API);

        dispatch({
            type: "GET_MOVIES",
            payload: res.data
        });

    } catch (error) {

        dispatch({
            type: "ERROR",
            payload: error.message
        });

    }

};

export const searchMovies = (search) => async (dispatch) => {

    dispatch({ type: "LOADING" });

    try {

        const res = await axios.get(API);

        const filter = res.data.filter(movie =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        );

        dispatch({
            type: "SEARCH_MOVIES",
            payload: filter
        });

    } catch (error) {

        dispatch({
            type: "ERROR",
            payload: error.message
        });

    }

};

export const movieDetails = (id) => async (dispatch) => {

    dispatch({ type: "LOADING" });

    try {

        const res = await axios.get(`${API}/${id}`);

        dispatch({
            type: "MOVIE_DETAILS",
            payload: res.data
        });

    } catch (error) {

        dispatch({
            type: "ERROR",
            payload: error.message
        });

    }

};