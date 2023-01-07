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
          <p>Liste verduras, legumes, consulte-os pelo nome e gere uma lista de preços.</p>
        </div>
				<img src={hortfruti} alt="Hortfruti"/>
			</section>
			<Footer />
		</>
	)
}

export default Home;