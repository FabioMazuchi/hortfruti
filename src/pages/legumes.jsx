import { useEffect, useState } from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import { getLegumes } from "../helpers";

function Legumes() {
	const [legumes, setLegumes] = useState([]);
	const [filter, setFilter] = useState([]);
	const [nome, setNome] = useState('');

	useEffect(() => {
		setFilter(getLegumes())
	}, [])

	useEffect(() => {
		const filterLegumes = () => setLegumes(filter.filter(({nome: n}) => n.includes(nome.toLowerCase())))
		if (nome === '') {
			setLegumes(getLegumes());
		} else {
			filterLegumes();
		} 
	}, [nome])

	return (
		<>
			<Header />
			<main className="content">
			<form>
					<input value={nome} onChange={({target}) => setNome(target.value)} type="text" />
					<p>🔎 Pesquisar legume...</p>
				</form>
				<h1><span>🍅 </span>Legumes <span>🥕</span></h1>
				<section>
					{legumes.map(({ nome, url, plu }) => (
						<Card nome={nome} url={url} plu={plu} />
					))}
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Legumes;