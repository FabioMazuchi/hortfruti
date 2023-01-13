import { useContext, useState } from "react";
import Context from "../context/context";

export default function Form({ nome, plu, form, setForm, listPreço }) {
	const [quantidade, setQuantidade] = useState(1);
	const [oferta, setOferta] = useState(false);
	const { listaEtiquetas, setListaEtiquetas, frutas, legumes } = useContext(Context);

	const exibeForm = () => {
		setForm(!form);
	}

	const updateFrutas = () => {
		frutas.forEach((fruta) => {
			if (fruta.plu === plu) fruta.listPreço = true;
		})
	}

	const updateLegumes = () => {
		legumes.forEach((legume) => {
			if (legume.plu === plu) legume.listPreço = true;
		})
	}

	const adicionar = (e) => {
		e.preventDefault();
		setListaEtiquetas( [...listaEtiquetas, { quantidade, oferta, nome, plu }])
		exibeForm();
		updateFrutas();
		updateLegumes();
		window.alert('Preço adicionado com sucesso!')
	}

	return (
		<>
			{listPreço ? <p>Já adicionado em preços!</p> : (
			<form>
				<label for="quantidade">
					Quantidade:
					<input value={quantidade} onChange={({target}) => setQuantidade(Number(target.value))} id="quantidade" type="number" min="1"/>
				</label>
				<label for="oferta">
					Oferta:
					<input value={oferta} onChange={({target}) => setOferta(target.checked)} id="oferta" type="checkbox" />
				</label>
				<button onClick={(e) => adicionar(e) }>Adicionar</button>
			</form>
			)}
	</>
	)
}