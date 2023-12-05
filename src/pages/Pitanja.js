import "./pitanja.css";
import React, { useContext, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Pitanja() {
    //   const ExpandMore = styled((props) => {
    //     const { expand, ...other } = props;
    //     return <IconButton {...other} />;
    //   })(({ theme, expand }) => ({
    //     transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    //     marginLeft: "auto",
    //     transition: theme.transitions.create("transform", {
    //       duration: theme.transitions.duration.shortest,
    //     }),
    //   }));
    //   const [expanded, setExpanded] = React.useState(false);

    //   const handleExpandClick = () => {
    //     setExpanded(!expanded);
    //   };
    const [showMore, setShowMore] = useState(false);
    const [showMor, setShowMor] = useState(false);
    const [showMo, setShowMo] = useState(false);
    const [showM, setShowM] = useState(false);
    const [show, setShow] = useState(false);
    const [sho, setSho] = useState(false);
    const [sh, setSh] = useState(false);
    const [s, setS] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };
    const handleShowMor = () => {
        setShowMor(!showMor);
    };
    const handleShowMo = () => {
        setShowMo(!showMo);
    };
    const handleShowM = () => {
        setShowM(!showM);
    };
    const handleShow = () => {
        setShow(!show);
    };
    const handleSho = () => {
        setSho(!sho);
    };
    const handleSh = () => {
        setSh(!sh);
    };
    const handleS = () => {
        setS(!s);
    };

    return (
        <div className="container2">
            <div className="in2">
                <div className="gore2">
                    <div className="title2">
                        <h3 className="h-2">Najčešća pitanja</h3>
                    </div>
                    <button className="buttondown" onClick={handleShowMore}>
                        <IoIosArrowDown />
                        &nbsp;Da li mogu da poručim robu preko telefona?
                    </button>
                    {showMore && (
                        <div className="f">
                            <p>
                                Poručivanje robe se vrši putem sajta (nije
                                moguće putem telefona), ali je moguće naručiti
                                robu putem društvenih mreža. Robu naručenu putem
                                društvenih mreža jedino je moguće platiti
                                pouzećem. Više informacija o poručivanju putem
                                sajta možete pronaći na stranici „Kako kupiti“.
                            </p>
                        </div>
                    )}
                    <button className="buttondown" onClick={handleShowMor}>
                        <IoIosArrowDown />
                        &nbsp; Kako da znam da sam uspešno poručio/la artikal
                        putem sajta?
                    </button>
                    {showMor && (
                        <div className="f">
                            <p>
                                Kada izvršite uspešnu kupovinu putem našeg sajta
                                prikazaće Vam se stranica sa brojem porudžbine i
                                porukom da ste uspešno poručili. Takođe dobićete
                                mail sa svim podacima o vašoj porudžbini.
                            </p>
                        </div>
                    )}
                    <button className="buttondown" onClick={handleShowMo}>
                        <IoIosArrowDown />
                        &nbsp; Kako da platim poručeni proizvod?
                    </button>
                    {showMo && (
                        <div className="f">
                            <p>
                                Plaćanje poručene robe preko sajta se može
                                izvršiti na dva načina:
                            </p>
                            <li>
                                pouzećem – prilikom preuzimanja robe, isključivo
                                u gotovini;
                            </li>
                            <li>platnim karticama</li>
                        </div>
                    )}
                    <button className="buttondown" onClick={handleShowM}>
                        <IoIosArrowDown />
                        &nbsp; Kako da znam da li je artikal na stanju?
                    </button>
                    {showM && (
                        <div className="f">
                            <p>
                                Ako je artikal dostupan za kupovinu, moći ćete
                                da izaberete svoju veličinu i dodate ga u vašu
                                korpu. Proizvodi na Top Auto Merch se brzo
                                prodaju i mogu biti kupljeni od strane drugog
                                kupca čak i ako se artikal nalazi u vašoj korpi.
                                Ako ste pronašli neki komad koji volite,
                                preporučujemo da što pre obavite kupovinu da ne
                                biste propustili priliku.
                            </p>
                        </div>
                    )}
                    <button className="buttondown" onClick={handleShow}>
                        <IoIosArrowDown />
                        &nbsp; Da li je moguće plaćanje na rate?
                    </button>
                    {show && (
                        <div className="f">
                            <p>
                                Plaćanje na rate je moguće samo prilikom
                                kupovine u prodavnicama, ukoliko posedujete
                                platnu karticu koja ima tu mogućnost, ili ako
                                plaćate čekovima građana.
                            </p>
                        </div>
                    )}
                    <button className="buttondown" onClick={handleSho}>
                        <IoIosArrowDown />
                        &nbsp; Da li plaćam troškove isporuke i koliko iznose?
                    </button>
                    {sho && (
                        <div className="f">
                            <p>Isporuka je trenutno BESPLATNA .</p>
                            <p>
                                Top Auto Merch zadrzava pravo da u svakom
                                momentu promeni uslove na sledece: Ukoliko
                                vrednost vaše porudžbine iznosi preko 6,000 RSD
                                isporuka je besplatna. Ukoliko su ispod navedene
                                sume, troškove poštarine snosi kupac i oni
                                iznose 490 dinara sa PDV-om.
                            </p>
                        </div>
                    )}
                    {
                        <button className="buttondown" onClick={handleSh}>
                            <IoIosArrowDown />
                            &nbsp; Kada će moja porudžba biti isporučena i kako
                            je mogu pratiti?
                        </button>
                    }
                    {sh && (
                        <div className="f">
                            <p>
                                Naš rok isporuke počinje od trenutka kada se
                                porudžbina postavi i uključuje period od 48 sati
                                tokom kojih će se vaši predmeti obraditi i
                                poslati. Kada vaša kupovina krene ka vama,
                                poslaćemo vam email sa vašim brojem za praćenje
                                i linkom za praćenje.
                            </p>
                        </div>
                    )}
                    <button className="buttondown" onClick={handleS}>
                        <IoIosArrowDown />
                        &nbsp; Da li postoji mogućnost zamene?
                    </button>
                    {s && (
                        <div className="f">
                            <p>
                                Prilikom online kupovine, u slučaju da vam je
                                poručeni artikal neodgovarajući, moguća je
                                zamena za drugu veličinu, ukoliko je imamo na
                                stanju ili za neki drugi artikal iz našeg
                                asortimana. Ukoliko vam je stigla veličina koju
                                ste poručili. ali ipak menjate ili vraćate
                                artikal, troškove povraćaja snosite Vi. Ukoliko
                                Vam je stigla pogrešna veličina ili pogrešan
                                artikal našom greškom, troškove povraćaja snosi
                                Top Auto Merch. Više informacija o zameni
                                kupljenog proizvoda možete pronaći na stranici
                                „Reklamacije“ porudžbini.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
