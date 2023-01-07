import { useState } from "react";
import Form from "./form";

function Card({ nome, url, plu }) {
	const [form, setForm] = useState(false);

	const exibeForm = () => {
		setForm(!form);
	}

	return (
		<div className="card">
			<h3>{nome}</h3>
			{form ? (
				<Form nome={nome} plu={plu} form={form} setForm={setForm}/>
			) : <img src={url} alt={nome}/>}
			<div className="etiquetas-plu">
				<h4>{plu}</h4>
				<span onClick={() => exibeForm()}>💲</span>
			</div>
		</div>
	)
}

export default Card;