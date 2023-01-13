import { useState } from "react";
import Context from "./context";

export default function Provider({ children}) {
	const [listaEtiquetas, setListaEtiquetas] = useState([]);
	const [frutas, setFrutas] = useState([]);
	const [legumes, setLegumes] = useState([]);

	return (
		<Context.Provider value={{ listaEtiquetas, setListaEtiquetas, frutas, setFrutas, legumes, setLegumes }}>
			<div>{children}</div>
		</Context.Provider>
	)
}