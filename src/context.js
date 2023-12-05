import React, { createContext, useState } from "react";
import Products from "./proizvodi";

const MyContext = createContext();

export { MyContext };

export default function ContextFunction({ children }) {
    const [item, setItem] = useState(Products);
    const [dataForAdmin, setDataForAdmin] = useState([]);
    const [poruceneModel, setPoruceneModel] = useState(["/"]);
    const [poruceneOpcija, setPoruceneOpcija] = useState(["/"]);
    const [poruceneColor, setPoruceneColor] = useState(["/"]);

    console.log("ContextFunction rendered with item:", dataForAdmin);

    return (
        <MyContext.Provider
            value={{
                dataForAdmin,
                setDataForAdmin,
                item,
                setItem,
                poruceneColor,
                poruceneModel,
                poruceneOpcija,
                setPoruceneModel,
                setPoruceneColor,
                setPoruceneOpcija,
            }}
        >
            {children}
        </MyContext.Provider>
    );
}
