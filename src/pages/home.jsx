import Header from "../components/header";

function Home() {
	return (
		<>
			<Header />
			<section className="home_section">
				<h1>Boas vindas ao Hortfruti!</h1>
				<p>O seu app onde é possível listar verduras e legumes além de filtrar por nome.</p>
			</section>
		</>
	)
}

export default Home;