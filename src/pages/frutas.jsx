import { useEffect, useState } from "react";
import Card from "../components/card";
import Header from "../components/header";
import { getFrutas } from "../helpers";

function Frutas() {
	const [frutas, setFrutas] = useState([]);

	useEffect(() => {
		setFrutas(getFrutas())
	}, [])
	return (
		<>
			<Header />
			<main className="frutas_main">
				<h1><span>🍍 </span>Frutas <span>🍉</span></h1>
				<section>
					{frutas.map(({ nome, img, plu, tipo }) => (
						<Card nome={nome} img={img} plu={plu} tipo={tipo} />
					))}
				</section>
			</main>
		</>
	)
}

export default Frutas;