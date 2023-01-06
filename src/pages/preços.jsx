import { useContext, useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Context from '../context/context';

export default function Preços() {
	const { listaEtiquetas } = useContext(Context)
	const [ofertas, setOfertas] = useState([]);
	const [normal, setNormal] = useState([]);

	useEffect(() => {
		const findOfertas = () => {
			setOfertas(listaEtiquetas.filter(({oferta}) => oferta));
		}
		const findNormal = () => {
			setNormal(listaEtiquetas.filter(({oferta}) => !oferta));
		}
		findOfertas();
		findNormal();
	}, [])

	return (
		<>
			<Header/>
			<main className="content">
					<h1>Preços <span>💲</span></h1>
					{listaEtiquetas.length !== 0 ? (
					<section className="etiquetas">
						{ofertas.map(({quantidade, nome, plu}) => (
							<label className="oferta">
								<p>{quantidade} - <strong>{ plu}</strong> {nome}</p>
									<input id="oferta" type="checkbox" />
							</label>
						))}
						{normal.map(({quantidade, nome, plu}) => (
							<label className="normal">
								<p>{quantidade} - <strong>{ plu}</strong> {nome}</p>
									<input id="normal" type="checkbox" />
							</label>
						))}
					</section>
					):
						<h4>Você não tem preços para imprimir!</h4>
					}
			</main>
			<Footer/>
		</>
	)
}