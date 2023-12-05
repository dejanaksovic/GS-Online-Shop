import { useContext, useRef, useState } from "react";
import "./komponente.css";
import Logo from "./one-moment.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBagShopping,
    faMagnifyingGlass,
    faPhone,
    faBars,
    faX,
} from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../context";
import Products from "../proizvodi";
function Navbar() {
    const { item, setItem } = useContext(MyContext);
    const [value, setValue] = useState("");
    const navRef = useRef();
    const searchRef = useRef();
    const bagRef = useRef();
    function handleInputChange(el) {
        setValue(el.target.value);
        filterItems(el.target.value);
    }
    console.log(value);
    function filterItems(term) {
        console.log(term);
        const filtered = Products.filter((el) =>
            el.naslov.toLowerCase().includes(term.toLowerCase())
        );

        setItem(filtered);
    }
    const navigate = useNavigate();
    const showBag = () => {
        bagRef.current.classList.toggle("showBag");
    };

    const removeSearch = () => {
        searchRef.current.classList.toggle("pretraziMainDisplay");
    };

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <div className="headerContainer">
            <div className="bagItems" ref={bagRef}>
                <div className="bagListOfItems">
                    <h2>Korpa</h2>
                </div>
                <button className="nav-close-btn" onClick={showBag}>
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
            <a className="pozovi" href="tel:+381628967329">
                {" "}
                <FontAwesomeIcon icon={faPhone} className="phoneIcon" />
                <p>PORUCI TELEFONOM</p>
            </a>
            <header>
                <div className="pretraziMain" ref={searchRef}>
                    <div
                        className="iconDiv"
                        onClick={() => {
                            navigate("/products");
                            setValue("");
                        }}
                    >
                        {" "}
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <input
                        onChange={handleInputChange}
                        className="pretrazi"
                        placeholder="Search our store"
                        value={value}
                    />
                    <div className="iconDiv" onClick={removeSearch}>
                        <FontAwesomeIcon icon={faX} />{" "}
                    </div>
                </div>
                <button className="nav-btn bars" onClick={showNavbar}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <Link to={"/"}>
                    <div
                        className="Logo"
                        onClick={() => {
                            setValue("");
                            setItem(Products);
                        }}
                    >
                        {" "}
                        <img src={Logo} />
                    </div>
                </Link>

                <nav ref={navRef}>
                    <a href="/products">Prodavnica</a>
                    <a href="tel:+381628967329">
                        <FontAwesomeIcon icon={faPhone} className="phoneIcon" />{" "}
                        Porucite telefonom
                    </a>
                    <a href="tel:+381628967329">
                        <FontAwesomeIcon icon={faPhone} className="phoneIcon" />{" "}
                        Veleprodaja
                    </a>

                    <a href="/about">About me</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}
                    >
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </nav>

                <button className="nav-btn-spec" onClick={removeSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button className="nav-btn-spec" onClick={showBag}>
                    <FontAwesomeIcon icon={faBagShopping} />
                </button>
            </header>
        </div>
    );
}

export default Navbar;
