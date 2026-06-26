import React from "react";

export default function Error({ message }) {
    return (
        <div className="alert alert-danger mt-3">
            {message}
        </div>
    );
}