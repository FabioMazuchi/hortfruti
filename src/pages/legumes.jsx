import { useEffect, useState } from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import { getLegumes } from "../helpers";

function Legumes() {
	const [legumes, setLegumes] = useState([]);
	const [nome, setNome] = useState('');

	const handleChange = ({target}) => {
		setNome(target.value);
	}

	useEffect(() => {
		const filterLegumes = () => setLegumes(legumes.filter(({nome: n}) => n.includes(nome)))
		setLegumes(getLegumes())
		if (nome !== '') filterLegumes();
	}, [nome])
	return (
		<>
			<Header />
			<main className="content">
			<form>
					<input value={nome} onChange={handleChange} type="text" />
					<p>🔎 Pesquisar legume...</p>
				</form>
				<h1><span>🍅 </span>Legumes <span>🥕</span></h1>
				<section>
					{legumes.map(({ nome, img, plu, tipo }) => (
						<Card nome={nome} img={img} plu={plu} tipo={tipo}/>
					))}
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Legumes;