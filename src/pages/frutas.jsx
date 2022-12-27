import { useEffect, useState } from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import { getFrutas } from "../helpers";

function Frutas() {
	const [frutas, setFrutas] = useState([]);
	const [filter, setFilter] = useState([]);
	const [nome, setNome] = useState('');

	useEffect(() => {
		setFilter(getFrutas())
	}, [])

	useEffect(() => {
		const filterFrutas = () => setFrutas(filter.filter(({nome: n}) => n.includes(nome.toLowerCase())))
		if (nome === '') {
			setFrutas(getFrutas())
		}  else {
			filterFrutas()
		}
	}, [nome])
	
	return (
		<>
			<Header />
			<main className="content">
				<form>
					<input value={nome} onChange={({target}) => setNome(target.value)} type="text" />
					<p>🔎 Pesquisar fruta...</p>
				</form>
				<h1><span>🍍 </span>Frutas <span>🍉</span></h1>
				<section>
					{frutas.map(({ nome, url, plu }) => (
						<Card nome={nome} url={url} plu={plu} />
					))}
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Frutas;