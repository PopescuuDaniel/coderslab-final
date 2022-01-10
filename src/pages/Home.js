import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Heart.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Daniel's Pizzeria </h1>
        <p> Pizza for all tastes </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
