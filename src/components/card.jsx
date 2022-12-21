function Card({ nome, url, plu }) {
	return (
		<div className="card">
			<h3>{nome}</h3>
			<img src={url} alt={nome}/>
			<h4>PLU {plu}</h4>
		</div>
	)
}

export default Card;