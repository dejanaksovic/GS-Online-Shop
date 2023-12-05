import "./App.css";
import Home from "./pages/Home";
import Navbar from "./komponente/Header";
import SviProizvodi from "./pages/SviProizvodi";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Proizvod from "./pages/proizvod";
import ContextFunction from "./context";
import Footer from "./komponente/footer/footerK";
import Contact from "./pages/Contact";
import Reklama from "./pages/Reklama";
import Politika from "./pages/Politika";
import Pitanja from "./pages/Pitanja";
import Korist from "./pages/Korist";
import About from "./pages/about";
import Uslovi from "./pages/Uslovi";
import Podaci from "./pages/Podaci";
import { useEffect } from "react";
import AdminPage from "./adminPanel/admin";
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Automatski skrolaj na vrh stranice kada se putanja promijeni
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Bez potrebe za renderom bilo čega
}

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <ContextFunction>
                    <Navbar />
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<SviProizvodi />} />
                        <Route path="/products/:naziv" element={<Proizvod />} />
                        <Route path="/:naziv" element={<Proizvod />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/reklama" element={<Reklama />} />
                        <Route path="/politika" element={<Politika />} />
                        <Route path="/pitanja" element={<Pitanja />} />
                        <Route path="/korist" element={<Korist />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/uslovi" element={<Uslovi />} />
                        <Route path="/podaci" element={<Podaci />} />
                        <Route path="/admin" element={<AdminPage />} />
                    </Routes>
                    <Footer />
                </ContextFunction>
            </div>
        </BrowserRouter>
    );
}

export default App;
