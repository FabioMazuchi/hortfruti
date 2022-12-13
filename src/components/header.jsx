import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li><Link to="/">home</Link></li>
					<li><Link to="/frutas">frutas</Link></li>
					<li><Link to="/legumes">legumes</Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;