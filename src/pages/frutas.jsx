import { useEffect, useState } from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import { getFrutas } from "../helpers";

function Frutas() {
	const [frutas, setFrutas] = useState([]);
	const [nome, setNome] = useState('');

	const handleChange = ({target}) => {
		setNome(target.value);
	}

	useEffect(() => {
		setFrutas(getFrutas())
		const filterFrutas = () => setFrutas(frutas.filter(({nome: n}) => n.includes(nome.toLowerCase())))
		if (nome !== '') filterFrutas();
	}, [nome])
	
	return (
		<>
			<Header />
			<main className="content">
				<form>
					<input value={nome} onChange={handleChange} type="text" />
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