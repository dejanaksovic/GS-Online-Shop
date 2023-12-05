import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context";

export default function SelectComponent({ item, identifier, ind }) {
    const {
        setPoruceneColor,
        setPoruceneOpcija,
        setPoruceneModel,
        poruceneOpcija,
        poruceneColor,
        poruceneModel,
    } = useContext(MyContext);

    // Manage state locally for each instance of SelectComponent
    const [localModel, setLocalModel] = useState(
        item.model ? Array(identifier).fill(item?.model[0]) : []
    );
    const [localOpcije, setLocalOpcije] = useState(
        item.opcije ? Array(identifier).fill(item?.opcije[0]) : []
    );
    const [localColor, setLocalColor] = useState(
        item.boje ? Array(identifier).fill(item.boje[0]) : []
    );

    useEffect(() => {
        setPoruceneColor(localColor);
        setPoruceneModel(localModel);
        setPoruceneOpcija(localOpcije);
    }, [identifier, item]);

    return (
        <div
            className="selektovi"
            style={{
                display: `${
                    item?.boje || item?.opcije || item?.model ? "" : "none"
                }`,
            }}
        >
            {item?.boje ? (
                <select
                    onChange={(e) => {
                        setPoruceneColor((prevLocalColor) => {
                            const newLocalColor = [...prevLocalColor];
                            newLocalColor[ind] = e.target.value;
                            return newLocalColor;
                        });
                    }}
                    name="boje"
                    value={poruceneColor[ind]}
                >
                    {item.boje.map((el) => (
                        <option key={el} value={el}>
                            {el}
                        </option>
                    ))}
                </select>
            ) : (
                ""
            )}
            {item?.model ? (
                <select
                    name="model"
                    id="cars"
                    onChange={(e) => {
                        setPoruceneModel((prevLocalModel) => {
                            const newLocalModel = [...prevLocalModel];
                            newLocalModel[ind] = e.target.value;
                            return newLocalModel;
                        });
                    }}
                    value={poruceneModel[ind]}
                >
                    {item.model.map((el) => (
                        <option key={el} value={el}>
                            {el}
                        </option>
                    ))}
                </select>
            ) : (
                ""
            )}
            {item?.opcije ? (
                <select
                    name="opcije"
                    onChange={(e) => {
                        setPoruceneOpcija((prevLocalOpcija) => {
                            const newLocalOpcija = [...prevLocalOpcija];
                            newLocalOpcija[ind] = e.target.value;
                            return newLocalOpcija;
                        });
                    }}
                    value={poruceneOpcija[ind]}
                >
                    {item.opcije.map((el) => (
                        <option key={el} value={el}>
                            {el}
                        </option>
                    ))}
                </select>
            ) : (
                ""
            )}
        </div>
    );
}
