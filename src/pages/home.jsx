import Footer from "../components/footer";
import Header from "../components/header";
import hortfruti from '../imgs/hortfruti.jpg';

function Home() {
	return (
		<>
			<Header />
			<section className="home_section">
				<div>
          <h1>Boas vindas ao <span>Hortfruti</span>!</h1>
          <p>O app. onde é possível listar verduras, legumes e pesquisá-los pelo nome.</p>
        </div>
				<img src={hortfruti} alt="Hortfruti"/>
			</section>
			<Footer />
		</>
	)
}

export default Home;