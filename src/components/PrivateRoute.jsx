import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {

    const login = true;

    return login ? children : <Navigate to="/" />;
}