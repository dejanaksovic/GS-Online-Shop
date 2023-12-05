import React from "react";
import "./pages.css";
import SviProizvodi from "./SviProizvodi";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="home">
                <div
                    className="bgImage"
                    style={{ backgroundImage: "url(kameraslika2.webp)" }}
                >
                    <h2>PRONAĐITE PROIZVODE KOJI ĆE OBOGATITI VAŠ ŽIVOT</h2>
                    <Link className="btnSviP" to={"/products"}>
                        {" "}
                        SVI PROIZVODI
                    </Link>
                </div>
            </div>
            <SviProizvodi />
        </>
    );
};

export default Home;
