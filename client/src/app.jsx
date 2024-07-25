import Router, { Switch, Route } from "crossroad";
import Home from "./routes/home";
import HookForm from "./routes/hookForm";
import NotFoundPage from "./routes/notFoundPage";
import State from "./routes/state";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
	return (
		<div className="w-full flex flex-column place-content-center bg-gray-100">
			<div className="w-11/12 max-w-7xl min-h-screen">
				<div className="min-h-screen bg-gray-100">
					<Header />
					<main className="px-4 py-8 bg-white">
						<Router>
							<Switch redirect="/">
								<Route exact path="/" component={Home} />
								<Route exact path="/hook-form/:step" component={HookForm} />
								<Route exact path="/state/:step" component={State} />
								<Route path="*" component={NotFoundPage} />
							</Switch>
						</Router>
					</main>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default App;
