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
		const filterFrutas = () => setFrutas(frutas.filter(({nome: n}) => n.includes(nome)))
		setFrutas(getFrutas())
		if (nome !== '') filterFrutas();
	}, [nome, frutas])
	
	return (
		<>
			<Header />
			<main className="content">
				<form>
					<input value={nome} onChange={handleChange} type="text" placeholder="Digite aqui o nome da fruta" />
				</form>
				<h1><span>🍍 </span>Frutas <span>🍉</span></h1>
				<section>
					{frutas.map(({ nome, img, plu, tipo }) => (
						<Card nome={nome} img={img} plu={plu} tipo={tipo} />
					))}
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Frutas;