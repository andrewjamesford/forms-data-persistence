import Router, { Route, Switch } from "crossroad";

import { Helmet } from "react-helmet";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./routes/home";
import MultiPageForm from "./routes/multi-page-form";
import NotFoundPage from "./routes/notFoundPage";
import SimpleForm from "./routes/simple-form";
import SinglePageForm from "./routes/single-page-form.jsx";

export default function App() {
	return (
		<div className="w-full flex flex-row place-content-center bg-gray-100">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Forms and Data Persistance</title>
			</Helmet>
			<div className="w-11/12 max-w-7xl min-h-screen flex flex-col ">
				<div className="bg-gray-100 h-full">
					<Router>
						<Header />
						<main className="px-4 py-8 bg-white">
							<Switch redirect="/">
								<Route exact path="/">
									<Home />
								</Route>
								<Route exact path="/simple/">
									<SimpleForm />
								</Route>
								<Route exact path="/single/">
									<SinglePageForm />
								</Route>
								<Route
									path="/multi/:step"
									render={({ step }) => <MultiPageForm step={step} />}
								/>
								<Route path="*">
									<NotFoundPage />
								</Route>
							</Switch>
						</main>
					</Router>
				</div>
				<Footer />
			</div>
		</div>
	);
}
