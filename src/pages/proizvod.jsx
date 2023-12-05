import React, { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Garancija from "./garancija.webp";
import Products from "../proizvodi";
import { useNavigate, useParams } from "react-router-dom";
import {
    faLocationPin,
    faPhone,
    faTag,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SviProizvodi from "./SviProizvodi";
import { MyContext } from "../context";
import SelectComponent from "./seletComponent";

export default function Proizvod() {
    const {
        poruceneOpcija,
        poruceneColor,
        poruceneModel,
        setPoruceneModel,
        setPoruceneOpcija,
        setPoruceneColor,
        dataForAdmin,
        setDataForAdmin,
    } = useContext(MyContext);
    console.log(dataForAdmin);
    const { naziv } = useParams();

    let item = Products.filter((item) => item.naslov === naziv);
    item = item[0];
    const [price, setPrice] = useState({
        cena: "",
        cenaSaPopustom:
            item.promocije[0].cena -
            item.promocije[0].cena * (item.promocije[0].popust / 100),
        popustUParama: "",
    });
    console.log("proizvod", poruceneColor, poruceneModel, poruceneOpcija);

    const navigate = useNavigate();

    const [invalidFields, setInvalidFields] = useState();
    const [kvantitet, setKvantitet] = useState(1);

    const [formData, setFormData] = useState({
        ime: "",
        prezime: "",
        telefon: "",
        grad: "",
        adresa: "",
    });

    //

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const [izvrsena, setIzvrsena] = useState(false);
    function sendDataFunction() {
        const combinedObject = {
            korisnik: formData,
            naslov: item.naslov,
            opcije: poruceneOpcija,
            model: poruceneModel,
            color: poruceneColor,
            postarina: postarina,
            kvantitet: kvantitet,
            ukupno: price.cenaSaPopustom + postarina,
        };

        setDataForAdmin([...dataForAdmin, combinedObject]);
        console.log(combinedObject.ukupno, price.cenaSaPopustom);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const invalidFieldsArray = Object.keys(formData).filter(
            (key) => !formData[key]
        );
        setInvalidFields(invalidFieldsArray);
        if (invalidFieldsArray == 0 && chosen.length > 2) {
            sendDataFunction();
            console.log("DATA FRO ADMIN", dataForAdmin);
            navigate("/admin");
        }

        if (invalidFieldsArray.length === 0 && postarina != 0) {
            // Form is valid, handle submission logic here
            console.log("Form data submitted:", formData);
            setIzvrsena(true);
        }
    };

    const [selectedOption, setSelectedOption] = useState(400);
    const [postarina, setPostarina] = useState(400);

    const handleOptionClick = (optionPrice) => {
        // Toggle the selected option
        {
            setSelectedOption(optionPrice);
            setPostarina(optionPrice);
        }
    };

    const [chosen, setChosen] = useState("");

    return (
        <>
            <div className="proizvodContainer">
                <Carousel className="carousel">
                    {item.slike.map((image) => {
                        return (
                            <div>
                                <img
                                    src={`${process.env.PUBLIC_URL}/${image}`}
                                />
                            </div>
                        );
                    })}
                </Carousel>
                <div className="proizvodContent">
                    <p className="naslovProizvod">{item.naslov}</p>

                    <div className="promocije">
                        <h2>KUPI VISE I USTEDI</h2>
                        <div className="promocijaCene">
                            {item.promocije.map((el, index) => {
                                return (
                                    <div
                                        className={`containerPromocijaTable ${
                                            el.naslov === chosen
                                                ? "containerPromocijaTableC"
                                                : ""
                                        }`}
                                    >
                                        <div
                                            onClick={() => {
                                                setChosen(el.naslov);
                                                setKvantitet(index + 1);

                                                let obj = {
                                                    cena: el.cena,
                                                    cenaSaPopustom:
                                                        el.cena -
                                                        el.cena *
                                                            (el.popust / 100),
                                                    popustUParama:
                                                        el.cena *
                                                        (el.popust / 100),
                                                };

                                                setPrice(obj);
                                            }}
                                            className="promocijaTable"
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "5px",
                                                }}
                                            >
                                                <img
                                                    className="kupiSlika"
                                                    src={`${process.env.PUBLIC_URL}/${item.slike[3]}`}
                                                />
                                                <div className="naslovPodNaslov">
                                                    <p className="naslov">
                                                        {el.naslov}
                                                    </p>
                                                    <p className="podNaslov">
                                                        {el.podNaslov +
                                                            " " +
                                                            el.popust}{" "}
                                                        %
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="cena">
                                                <strike>{el.cena} RSD</strike>
                                                <p>
                                                    {el.cena -
                                                        el.cena *
                                                            (el.popust /
                                                                100)}{" "}
                                                    RSD
                                                </p>
                                            </div>
                                        </div>
                                        {chosen == el.naslov ? (
                                            <>
                                                {" "}
                                                {Array.from(
                                                    { length: index + 1 },
                                                    (_, i) => (
                                                        <SelectComponent
                                                            key={i}
                                                            identifier={
                                                                kvantitet
                                                            }
                                                            item={item}
                                                            ind={i}
                                                        />
                                                    )
                                                )}
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                );
                            })}
                            {price.cena ? (
                                <div className="korpaContainer">
                                    <div className="cenaKorpe">
                                        <p>Cena korpe</p>
                                        <p className="pr">{price.cena} RSD</p>
                                    </div>
                                    <div className="cenaPopust">
                                        <p>
                                            Popust{" "}
                                            <FontAwesomeIcon
                                                icon={faTag}
                                                style={{ color: "#747576" }}
                                            />
                                        </p>
                                        <p className="pr">
                                            -{price.popustUParama} RSD
                                        </p>
                                    </div>
                                    <div className="postarinaKorpe">
                                        <p>Postarina</p>
                                        <p className="pr">{postarina} RSD</p>
                                    </div>
                                    <div className="ukupnoKorpe">
                                        <p>Ukupno</p>
                                        <p className="pr">
                                            {price.cenaSaPopustom + postarina}{" "}
                                            RSD
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="nacinDostave korpaContainer">
                                <h2 className="nacinDostaveNaslov">
                                    NACIN DOSTAVE
                                </h2>
                                <div
                                    className={
                                        selectedOption === 400 ? "selected" : ""
                                    }
                                    onClick={() => handleOptionClick(400)}
                                >
                                    <input
                                        type="radio"
                                        checked={selectedOption === 400}
                                    />
                                    <p>Standardna / 3-5 Radnih Dana</p>
                                    <h2>400 RSD</h2>
                                </div>
                                <div
                                    className={
                                        selectedOption === 600 ? "selected" : ""
                                    }
                                    onClick={() => handleOptionClick(600)}
                                >
                                    <input
                                        type="radio"
                                        checked={selectedOption === 600}
                                    />
                                    <p>Standardna / 1-3 Radnih Dana</p>
                                    <h2>600 RSD</h2>
                                </div>
                            </div>
                            <div className="formContainer">
                                <h2>UPIŠITE ADRESU ZA DOSTAVU</h2>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="ime">Ime:</label>
                                        <div>
                                            <FontAwesomeIcon
                                                className="formIcon"
                                                icon={faUser}
                                                style={{ color: "#2b2b2b" }}
                                            />
                                            <input
                                                type="text"
                                                id="ime"
                                                name="ime"
                                                value={formData.ime}
                                                onChange={handleChange}
                                                style={{
                                                    border: invalidFields?.includes(
                                                        "ime"
                                                    )
                                                        ? "2px solid red"
                                                        : "",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="prezime">
                                            Prezime:
                                        </label>
                                        <div>
                                            {" "}
                                            <FontAwesomeIcon
                                                className="formIcon"
                                                icon={faUser}
                                                style={{ color: "#2b2b2b" }}
                                            />
                                            <input
                                                type="text"
                                                id="prezime"
                                                name="prezime"
                                                value={formData.prezime}
                                                onChange={handleChange}
                                                style={{
                                                    border: invalidFields?.includes(
                                                        "prezime"
                                                    )
                                                        ? "2px solid red"
                                                        : "",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="telefon">
                                            Telefon:
                                        </label>
                                        <div>
                                            <FontAwesomeIcon
                                                className="formIcon"
                                                icon={faPhone}
                                            />
                                            <input
                                                type="tel"
                                                id="telefon"
                                                name="telefon"
                                                value={formData.telefon}
                                                onChange={handleChange}
                                                style={{
                                                    border: invalidFields?.includes(
                                                        "telefon"
                                                    )
                                                        ? "2px solid red"
                                                        : "",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="grad">Grad:</label>
                                        <div>
                                            <FontAwesomeIcon
                                                className="formIcon"
                                                icon={faLocationPin}
                                            />

                                            <input
                                                type="text"
                                                id="grad"
                                                name="grad"
                                                value={formData.grad}
                                                onChange={handleChange}
                                                style={{
                                                    border: invalidFields?.includes(
                                                        "grad"
                                                    )
                                                        ? "2px solid red"
                                                        : "",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="adresa">Adresa:</label>
                                        <div>
                                            <FontAwesomeIcon
                                                className="formIcon"
                                                icon={faLocationPin}
                                            />
                                            <input
                                                type="text"
                                                id="adresa"
                                                name="adresa"
                                                value={formData.adresa}
                                                onChange={handleChange}
                                                style={{
                                                    border: invalidFields?.includes(
                                                        "adresa"
                                                    )
                                                        ? "2px solid red"
                                                        : "",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleSubmit}
                                        style={{
                                            background: `${
                                                !izvrsena ? "green" : ""
                                            }"`,
                                            animation: `${
                                                izvrsena ? "none" : ""
                                            }`,
                                        }}
                                        className="formButton"
                                        type="submit"
                                    >
                                        {!izvrsena
                                            ? " ZAVRSI KUPOVINU"
                                            : "USPENSO STE IZVRSILI KUPOVINU !"}
                                    </button>
                                </form>
                            </div>
                            <div className="garancija">
                                <img src={Garancija} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="deskripcijaProizvoda">
                <h2> {item.deskripcija.naslov}</h2>
                <p>{item.deskripcija.opis}</p>
            </div>
            <div className="catalog">
                {item.slike.map((image, i) => {
                    if (i >= 2)
                        return (
                            <img src={`${process.env.PUBLIC_URL}/${image}`} />
                        );
                })}
            </div>
            <SviProizvodi mainTitle="MOZDA VAM SE SViDI" />
        </>
    );
}
