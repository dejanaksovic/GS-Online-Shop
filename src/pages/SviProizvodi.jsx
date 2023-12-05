import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context";
const SviProizvodi = ({ mainTitle = "SVI PROIZVODI" }) => {
    const { item } = useContext(MyContext);
    const navigate = useNavigate();

    return (
        <div className="sviProizvodi">
            <h2 style={{ marginBottom: "2rem" }}>{mainTitle}</h2>
            {item.length >= 1 &&
                item.map((el) => {
                    return (
                        <div
                            className="card"
                            onClick={() => {
                                navigate(`../${el.naslov}`, {
                                    replace: true,
                                });
                            }}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/${el.slike[0]}`}
                            />

                            <p className="akcijaMark">Akcija</p>

                            <div className="textContent">
                                <p className="cardNaslov">{el.naslov}</p>
                                <div className="cena">
                                    <strike>{el.cena} RSD</strike>
                                    <p>
                                        {el.cena - el.cena * (el.popust / 100)}{" "}
                                        RSD
                                    </p>
                                </div>
                                <p className="popust">Ustedi {el.popust}%</p>
                            </div>
                        </div>
                    );
                })}
            {item.length == 0 && (
                <h1
                    style={{
                        height: "20vh",
                        textAlign: "center",
                        marginTop: "3rem",
                        color: "gray",
                    }}
                >
                    Trenutno nema takvih proizvoda ...
                </h1>
            )}
        </div>
    );
};

export default SviProizvodi;
