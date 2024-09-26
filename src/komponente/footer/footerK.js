import React from "react";
import "./foter.css";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineTag } from "react-icons/ai";
import Logo from "../one-moment.png";

import { PiTruck } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
export default function Footer() {
    const navigate = useNavigate();
    return (
        <div className="footer">
            {" "}
            <h1
                className="ha1"
                style={{ textAlign: "center", letterSpacing: "5px" }}
            >
                ZASTO TOP AUTO MERCH ?
            </h1>
            <div className="top">
                <div className="topleft">
                    <div className="l"></div>
                    <div className="r">
                        <AiOutlineTag className="icons" fontSize={40} />
                        <p style={{ paddingTop: "20px" }}>
                            Povoljne Cene i Dodatni Popusti
                        </p>
                        <p style={{ paddingTop: "20px" }}>Direktni uvoznici</p>
                        <p
                            style={{
                                textDecoration: "underline",
                                paddingTop: "10px",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                navigate("/Organizator Za Auto Sedište");
                            }}
                        >
                            Najprodavaniji proizvod
                        </p>
                    </div>
                </div>
                <div className="topmid" style={{ position: "relative" }}>
                    <IoNewspaperOutline
                        fontSize={55}
                        style={{ paddingTop: "20px" }}
                    />
                    <p style={{ paddingTop: "20px" }}>Kvalitet</p>
                    <p
                        style={{ paddingTop: "15px", cursor: "pointer" }}
                        onClick={() => {
                            navigate("/reklama");
                        }}
                    >
                        Mogućnost zamene i povraćaja novca ako niste zadovoljni
                    </p>
                    <p
                        style={{
                            paddingTop: "17px",
                            textDecoration: "underline",
                            fontWeight: "100",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            navigate("/uslovi");
                        }}
                    >
                        Uslovi Zamene ili Povraćaja
                    </p>
                </div>
                <div className="topright">
                    <div className="tr">
                        <PiTruck fontSize={38} />
                        <p style={{ paddingTop: "30px" }}>
                            Brza dostava / 2 Radna Dana
                        </p>
                        <p style={{ paddingTop: "10px" }}>Na Kućnu Adresu</p>
                        <p
                            style={{
                                textDecoration: "underline",
                                paddingTop: "10px",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                navigate("/uslovi");
                            }}
                        >
                            Uslovi Isporuke
                        </p>
                    </div>
                    <div className="tl"></div>
                </div>
            </div>
            <div className="middle">
                <div className="midleft">
                    <div className="mleft"></div>
                    <div className="mright">
                        <h3 style={{ fontWeight: "200" }}>
                            NEWSLETTER REGISTRACIJA
                        </h3>
                        <p style={{ color: "#858585", textAlign: "center" }}>
                            Prijavite se za newsletter kako bi ostvarili dodatni
                            popust od 10% i dobijali informacije o novim
                            proizvodima, budućim događajima i specijalnim
                            ponudama.
                        </p>
                        <h4 style={{ color: "#707070",, textAlign: "center" }}>
                            Prijavite se odmah i zgrabite kupon od 10% popusta!
                        </h4>
                        <input
                            className="inputt"
                            placeholder="Unesi email adresu"
                            style={{
                                width: "90%",
                                height: "50px",
                                fontSize: "20px",
                                fontWeight: "100",
                                paddingBottom: "4px",
                                paddingLeft: "10px",
                                border: "1px solid #a7a7a7",
                                borderRadius: "5px",
                            }}
                        ></input>
                        <button className="btnmidleft">Prijavi se!</button>
                    </div>
                </div>
                <div className="midmiddle">
                    <p style={{ fontWeight: "100", letterSpacing: "8px" }}>
                        POMOC & SAVET
                    </p>
                    <p style={{ color: "#858585" }}>
                        Na raspolaganju 24/7 za Vas.
                    </p>
                    <button
                        className="btnmid"
                        onClick={() => {
                            navigate("/contact");
                        }}
                    >
                        Kontakt
                    </button>
                    <button
                        className="btnmid"
                        onClick={() => {
                            navigate("/podaci");
                        }}
                    >
                        Podaci O Firmi
                    </button>
                </div>
                <div className="midright">
                    <div className="midrightleft">
                        <div className="toppom">
                            <p style={{ fontWeight: "100" }}>
                                VISE INFORMACIJA
                            </p>
                        </div>
                        <div className="bot">
                            <button
                                className="btn"
                                onClick={() => {
                                    navigate("/about");
                                }}
                            >
                                O Nama
                            </button>
                            <button
                                className="btn"
                                onClick={() => {
                                    navigate("/uslovi");
                                }}
                            >
                                Uslovi Korišćenja
                            </button>
                            <button
                                onClick={() => {
                                    navigate("/reklama");
                                }}
                                style={{ height: "45px" }}
                                className="btn"
                            >
                                Reklamacija,Zamene & Povraćaj Sredstva
                            </button>
                            <button
                                className="btn"
                                onClick={() => {
                                    navigate("/pitanja");
                                }}
                            >
                                Najčešća pitanja
                            </button>
                            <button
                                className="btn"
                                onClick={() => {
                                    navigate("/uslovi");
                                }}
                            >
                                Uslovi Isporuke
                            </button>
                            <button
                                className="btn"
                                onClick={() => {
                                    navigate("/politika");
                                }}
                            >
                                Politika Privatnosti
                            </button>
                        </div>
                    </div>
                    <div className="midrightright"></div>
                </div>
            </div>
            <div className="bottom">
                                    <hr />
                <div class="contact-info">
                    <div class="contact-details">
                        <p> C A L L&nbsp; C E N T A R</p>
                        <p>Pon-Pet od 10:00 do 16:00</p>
                        <p className="order-by-phone">Tel: +381 62 687687</p>
                        <p class="order-by-phone">
                            E-mail: onemomentshop2023@gmail.com
                        </p>
                    </div>
                    <div class="online-store">
                        <p>Online Prodavnica Radi 24/7</p>
                        <p>Uvek mozete poruciti!</p>
                        <p>Poručite Telefonom od 10h - 20h na:</p>
                        <p className="order-by-phone">062 687687</p>
                    </div>
                </div>
                <div className="bottommid">
                                    <hr />
                    <p>
                        Nastojimo da budemo što precizniji u opisu proizvoda,
                        prikazu slika i samih cena, ali ne možemo garantovati da
                        su sve informacije kompletne i bez grešaka. Svi artikli
                        prikazani na sajtu su deo naše ponude i ne podrazumeva
                        da su dostupni u svakom trenutku.
                    ponude i ne podrazumeva da su dostupni u svakom trenutku.
                    </p>
                            <hr />
                    <img src={Logo}></img>
                </div>
                <div className="bottombot">
                    <p>© 2023 Top Auto Merch Sva Prava Zadržana</p>
                    <p style={{ fontSize: "14px" }}>Powered by Shopify</p>
                </div>
            </div>
        </div>
    );
}
