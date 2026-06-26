import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const styles = {
    navbar: {
      background: "linear-gradient(90deg,#0f172a,#1e293b)",
      padding: "15px 40px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.4)"
    },

    brand: {
      color: "#ff4d6d",
      fontSize: "30px",
      fontWeight: "bold",
      textDecoration: "none",
      letterSpacing: "1px"
    },

    navContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    },

    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "25px"
    },

    link: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "500",
      transition: "0.3s"
    },

    search: {
      padding: "8px 15px",
      borderRadius: "25px",
      border: "none",
      outline: "none",
      background: "#334155",
      color: "#fff",
      marginLeft: "20px"
    },

    button: {
      background: "#ff4d6d",
      color: "#fff",
      border: "none",
      padding: "8px 18px",
      borderRadius: "25px",
      cursor: "pointer",
      marginLeft: "15px"
    }
  };

  return (
    <nav style={styles.navbar}>
      <div className="container" style={styles.navContainer}>

        <Link to="/" style={styles.brand}>
          Movie App
        </Link>

        <div style={styles.navLinks}>

          <Link to="/" style={styles.link}>
            Popular Movies
          </Link>

{/* 
   <Link   to="/login">
  Login
  </Link> */}

  
          <Link to="/search" style={styles.link}>
            Search
          </Link>

          <input
            type="text"
            placeholder="Search Movie..."
            style={styles.search}
          />

          <button style={styles.button}>
            

<Link className="nav-link" to="/login">
  Login
</Link>
           
          </button>

        </div>

      </div>
    </nav>
  );
}