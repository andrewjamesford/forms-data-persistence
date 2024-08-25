import Router, { Switch, Route } from "crossroad";
import Home from "./routes/home";
import NotFoundPage from "./routes/notFoundPage";
import MultiPageForm from "./routes/multi-page-form";
import SinglePageForm from "./routes/single-page-form.jsx";
import SimpleForm from "./routes/simple-form";
import Header from "./components/header";
import Footer from "./components/footer";
import { Helmet } from "react-helmet";

const App = () => {
	return (
		<div className="w-full flex flex-column place-content-center bg-gray-100">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Forms and Data Persistance</title>
			</Helmet>
			<div className="w-11/12 max-w-7xl min-h-screen">
				<div className="min-h-screen bg-gray-100">
					<Router>
						<Header />
						<main className="px-4 py-8 bg-white">
							<Switch redirect="/">
								<Route exact path="/" component={Home} />
								<Route exact path="/simple/" component={SimpleForm} />
								<Route exact path="/single/" component={SinglePageForm} />
								<Route exact path="/multi/:step" component={MultiPageForm} />
								<Route path="*" component={NotFoundPage} />
							</Switch>
						</main>
					</Router>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default App;
