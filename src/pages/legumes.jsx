import { useEffect, useState } from "react";
import Card from "../components/card";
import Header from "../components/header";
import { getLegumes } from "../helpers";

function Legumes() {
	const [legumes, setLegumes] = useState([]);

	useEffect(() => {
		setLegumes(getLegumes())
	}, [])
	return (
		<>
			<Header />
			<main className="frutas_main">
				<h1><span>🍅 </span>Legumes <span>🥕</span></h1>
				<section>
					{legumes.map(({ nome, img, plu, tipo }) => (
						<Card nome={nome} img={img} plu={plu} tipo={tipo}/>
					))}
				</section>
			</main>
		</>
	)
}

export default Legumes;