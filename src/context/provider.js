import { useState } from "react";
import Context from "./context";

export default function Provider({ children}) {
	const [listaEtiquetas, setListaEtiquetas] = useState([]);
	return (
		<Context.Provider value={{ listaEtiquetas, setListaEtiquetas }}>
			<div>{children}</div>
		</Context.Provider>
	)
}