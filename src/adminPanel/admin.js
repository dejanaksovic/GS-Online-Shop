import React, { useContext, useState } from "react";
import "./admin.css";
import { MyContext } from "../context";
// src/App.js

const orders = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        phone: "123-456-7890",
        address: "123 Main St, City",
        productName: "Smartphone",
        color: ["Black", "Pink"],
        model: ["Iphone", "Android"],
        option: ["/"],
        total: 599.99,
        quantity: 2,
        postarina: 400,
    },
    {
        id: 2,
        firstName: "John",
        lastName: "Doe",
        phone: "123-456-7890",
        address: "123 Main St, City",
        productName: "Smartphone",
        color: ["BLUE"],
        model: ["/"],
        option: ["IPHONE"],
        total: 599.99,
        quantity: 2,
        postarina: 600,
    },
    // Dodajte više redova prema potrebi
];

const AdminPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [logged, setLogged] = useState(true);
    const { dataForAdmin } = useContext(MyContext);
    console.log("why nothin", dataForAdmin);

    return (
        <div className="adminContainer">
            {!(username == "admin") ? (
                <div class="log-form">
                    <h2>Login to your account</h2>
                    <form>
                        <input
                            type="text"
                            title="username"
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <input
                            value={password}
                            type="password"
                            title="username"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" class="btn">
                            Login
                        </button>
                        <a class="forgot" href="#">
                            Forgot Username?
                        </a>
                    </form>
                </div>
            ) : (
                <table>
                    <caption>PORUDZBINE</caption>
                    <thead>
                        <tr>
                            <th scope="col">Ime</th>
                            <th scope="col">Prezime</th>
                            <th scope="col">Adresa</th>
                            <th scope="col">Br.tel</th>
                            <th scope="col">Naziv Proizvoda</th>
                            <th scope="col">Kolicina</th>
                            <th scope="col">Ukupna cena</th>
                            <th scope="col">Model</th>
                            <th scope="col">Opcija</th>
                            <th scope="col">Boja</th>
                            <th scope="col">Postarina</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataForAdmin.map((el) => {
                            return (
                                <tr>
                                    <td data-label="Ime">{el.korisnik.ime}</td>
                                    <td data-label="Prezime">
                                        {el.korisnik.prezime}
                                    </td>
                                    <td data-label="Adresa">
                                        {el.korisnik.adresa}
                                    </td>
                                    <td data-label="Grad">
                                        {el.korisnik.grad}
                                    </td>
                                    <td data-label="Br.tel">
                                        {el.korisnik.telefon}
                                    </td>
                                    <td data-label="Naziv Proizvoda">
                                        {el.naslov}
                                    </td>

                                    <td data-label="Kolicina">
                                        {el.kvantitet}
                                    </td>

                                    <td data-label="Ukupna cena">
                                        {el.ukupno}
                                    </td>
                                    <td data-label="Model">
                                        {el.model.length > 2
                                            ? el.model.join(" ") + " "
                                            : "/"}
                                    </td>
                                    <td data-label="Opcija">
                                        {el.opcije.length > 2
                                            ? el.opcije.join(" ") + " "
                                            : "/"}
                                    </td>
                                    <td data-label="Boja">
                                        {el.color.length > 2
                                            ? el.color.join(" ") + " "
                                            : "/"}
                                    </td>
                                    <td data-label="Postarina">
                                        {el.postarina}
                                    </td>

                                    <a href={`tel:+381${el?.phone?.slice(1)}`}>
                                        POZOVI KUPCA
                                    </a>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminPage;
