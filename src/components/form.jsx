import { useContext, useState } from "react";
import Context from "../context/context";

export default function Form({ nome, plu, form, setForm }) {
	const [quantidade, setQuantidade] = useState(1);
	const [oferta, setOferta] = useState(false);
	const { listaEtiquetas, setListaEtiquetas } = useContext(Context);

	const exibeForm = () => {
		setForm(!form);
	}

	const adicionar = (e) => {
		e.preventDefault();
		setListaEtiquetas( [...listaEtiquetas, { quantidade, oferta, nome, plu }])
		exibeForm();
		window.alert('Preço adicionado com sucesso!')
	}

	return (
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
	)
}