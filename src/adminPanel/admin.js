import React, { useContext, useEffect, useState } from "react";
import "./admin.css";
import { MyContext } from "../context";
import { useGetOrders } from "../hooks/useGetOrders";
// src/App.js

const AdminPage = () => {
    const { loading: dataLoading, error:dataError, orders, getOrders } = useGetOrders();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [logged, setLogged] = useState(true);
    const { dataForAdmin } = useContext(MyContext);
    console.log("why nothin", dataForAdmin);

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <div className="adminContainer">
            {!(username == "semin" && password == "seminexit") ? (
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
                        {orders.map((e) => {
                            return (
                                <tr>
                                    <td data-label="Ime">{e?.name}</td>
                                    <td data-label="Prezime">
                                        {e?.surname}
                                    </td>
                                    <td data-label="Adresa">
                                        {e?.adress}
                                    </td>
                                    <td data-label="Br.tel">
                                        {e?.phone}
                                    </td>
                                    <td data-label="Naziv Proizvoda">
                                        {e?.orders?.name}
                                    </td>

                                    <td data-label="Kolicina">
                                        {e.orders?.quantity}
                                    </td>

                                    <td data-label="Ukupna cena">
                                        {e?.orders?.summedPrice || null}
                                    </td>
                                    <td data-label="Model">
                                        {e?.orders?.model || null}
                                    </td>
                                    <td data-label="Opcija">
                                        {e?.orders?.option || null}
                                    </td>
                                    <td data-label="Boja">
                                        {e?.orders?.color || null}
                                    </td>
                                    <td data-label="Postarina">
                                        {e?.orders?.shipping || null}
                                    </td>

                                    <a href={`tel:+381${e?.phone?.slice(1)}`}>
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
