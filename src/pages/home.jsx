import Footer from "../components/footer";
import Header from "../components/header";

function Home() {
	return (
		<>
			<Header />
			<section className="home_section">
				<h1>Boas vindas ao Hortfruti!</h1>
				<p>O app. onde é possível listar verduras, legumes e pesquisá-los pelo nome.</p>
			</section>
			<Footer />
		</>
	)
}

export default Home;