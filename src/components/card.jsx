function Card({ nome, img, plu, tipo }) {
	return (
		<div className="card">
			<h3>{nome}</h3>
			<img src={`./imgs/${tipo}/${img}`} alt={nome}/>
			<h4>PLU {plu}</h4>
		</div>
	)
}

export default Card;