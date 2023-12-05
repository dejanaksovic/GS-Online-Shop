import React from "react";
import "./uslovi.css";
function Uslovi() {
    return (
        <div className="container6">
            <div className="in6">
                <div className="gore6">
                    <h1 className="h-6">USLOVI ISPORUKE</h1>
                    <h4>Kurirska Služba: D Express</h4>
                    <img
                        style={{ width: "150px", height: "80px" }}
                        src="logo.webp"
                    ></img>
                    <p style={{ fontWeight: "lighter" }}>ROK ISPORUKE</p>
                    <p>
                        U zavisnosti od Vaše lokacije i trenutno raspoloživih
                        proizvoda, možete očekivati Vašu isporuku na kućnoj
                        adresi u roku od 1 do 5 radnih dana (ne vršimo dostavu
                        vikendom).
                    </p>
                    <h4>PREUZIMANJE POŠILJKE</h4>
                    <p>
                        U skladu sa radnim vremenom kurirskih službi, Vašu
                        porudžbinu možete očekivati u periodu od 8h do 17h.
                    </p>
                    <p>
                        Kuriri vrše dostavu u dva navrata. Ukoliko na adresi za
                        isporuku u datom trenutku nema nikog ko može primiti
                        porudžbinu, kurir ima pravo da Vas kontaktira na broj
                        telefona koji ste ostavili prilikom poručivanja i, po
                        dogovoru, zakaže novi termin dostave. Ukoliko je i drugi
                        pokušaj isporuke neuspešan, pošiljka se vraća nama.
                    </p>
                    <p>
                        Prilikom preuzimanja porudžbine, važno je da proverite
                        da li ima bilo kakvih oštećenja. Ukoliko je to slučaj,
                        molimo Vas da nas kontaktirate u što kraćem periodu na
                        broj telefona ili putem emaila:
                        onemomentshop2023@gmail.com.
                    </p>
                    <h4>CENA ISPORUKE</h4>
                    <p>
                        Cena isporuke na kućnu adresu za sve porudžbine je 400
                        RSD a prioritetna dostava je 600 RSD.
                    </p>
                    <h4>OGRANIČENJA ISPORUKE</h4>
                    <p>
                        U skladu sa politikom kurirskih službi, isporuku vršimo
                        na čitavoj teritoriji Republike Srbije, sa izuzetkom
                        teritorije oblasti Kosova i Metohije.
                    </p>
                    <p>Ne vršimo dostavu van teritorije Republike Srbije.</p>
                    <p>
                        Kuriri donose paket do kućne adrese, ali ne unose paket
                        u stambeni prostor.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Uslovi;
