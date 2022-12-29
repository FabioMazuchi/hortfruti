import Footer from "../components/footer";
import Header from "../components/header";
import hortfruti from '../imgs/hortfruti.png';

function Home() {
	return (
		<>
			<Header />
			<section className="home_section">
				<h1>Boas vindas ao Hortfruti!</h1>
				<p>O app. onde é possível listar verduras, legumes e pesquisá-los pelo nome.</p>
				<img src={hortfruti} alt="Hortfruti"/>
			</section>
			<Footer />
		</>
	)
}

export default Home;