import Router, { Switch, Route } from "crossroad";
import Formik from "./routes/formik";
import Home from "./routes/home";
import HookForm from "./routes/hookForm";
import NotFoundPage from "./routes/notFoundPage";
import State from "./routes/state";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="">
			<Header />
			<div className="min-h-screen bg-gray-100">
				<main className="px-4 py-8 bg-white">
					<Router>
						<Switch redirect="/">
							<Route exact path="/" component={Home} />
							<Route exact path="/formik" component={Formik} />
							<Route exact path="/hook-form" component={HookForm} />
							<Route exact path="/state/:step" component={State} />
							<Route path="*" component={NotFoundPage} />
						</Switch>
					</Router>
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default App;
