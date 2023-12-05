import React, { useState, useEffect } from "react";
import "./contact.css";

export default function Contact() {
    const [clickedElement, setClickedElement] = useState(null);

    const handleClick = (element) => {
        setClickedElement(element);
    };

    const handleDocumentClick = (event) => {
        if (
            !event.target.classList.contains("inputs") &&
            !event.target.classList.contains("area")
        ) {
            setClickedElement(null);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <div className="container7">
            <div className="in7">
                <div className="gore7">
                    <div className="title7">
                        <h1 className="h-7">KONTAKTIRAJTE NAS</h1>
                    </div>
                    <div className="secondTitle">
                        <h2 style={{ fontWeight: "100" }}>
                            24/7 Dostupan E mail:
                        </h2>
                        <a
                            style={{ color: "black", fontSize: "23px" }}
                            href="mailto:onemomentshop2023@gmail.com"
                        >
                            onemomentshop2023@gmail.com
                        </a>
                    </div>
                    <h3 style={{ fontWeight: "100" }}>Od 10h do 16h</h3>
                    <a
                        style={{ color: "black", fontSize: "23px" }}
                        href="tel:+381 62 687687"
                    >
                        TEL: +381 62 687687
                    </a>
                </div>
                <div className="dole7">
                    <div className="boths">
                        <div
                            className={`a ${
                                clickedElement === "a" ? "clicked" : ""
                            }`}
                        >
                            <label>Name</label>
                            <input
                                className="inputs"
                                onClick={() => handleClick("a")}
                            ></input>
                        </div>
                        <div
                            className={`b ${
                                clickedElement === "b" ? "clicked" : ""
                            }`}
                        >
                            <label>Email</label>
                            <input
                                className="inputs"
                                onClick={() => handleClick("b")}
                            ></input>
                        </div>
                    </div>

                    <div
                        className={`c ${
                            clickedElement === "c" ? "clicked" : ""
                        }`}
                    >
                        <label>Message</label>
                        <textarea
                            className="area"
                            onClick={() => handleClick("c")}
                        ></textarea>
                    </div>
                    <button className="ben">
                        <label>Send</label>
                    </button>
                    <p style={{ paddingTop: "34px" }}>
                        This site is protected by reCAPTCHA and the Google{" "}
                        <a href="https://policies.google.com/privacy">
                            Privacy
                        </a>{" "}
                        Policy and
                        <a href="https://policies.google.com/terms">
                            {" "}
                            Terms of Service
                        </a>
                        apply.
                    </p>
                </div>
            </div>
        </div>
    );
}
