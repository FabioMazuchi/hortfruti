import { useContext, useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Context from '../context/context';

export default function Etiquetas() {
	const { listaEtiquetas } = useContext(Context)
	const [ofertas, setOfertas] = useState([]);

	useEffect(() => {
		const findOfertas = () => {
			setOfertas(listaEtiquetas.filter(({oferta}) => oferta));
		}
		findOfertas();
	}, [])

	return (
		<>
			<Header/>
			<main className="content">
					<h1>Etiquetas <span>🏷️</span></h1>
					<section className="etiquetas">
						<h2>Ofertas</h2>
						{ofertas.map(({quantidade, nome, plu}) => (
							<div>
								<p>{quantidade } - {nome} <strong>{ plu}</strong></p>
								<button>Impresso</button>
							</div>
						))}
					</section>
			</main>
			<Footer/>
		</>
	)
}