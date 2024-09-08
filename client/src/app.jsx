import Router, { Route, Switch } from "crossroad";

import Footer from "./components/footer";
import Header from "./components/header";
import SimpleFormPage from "./components/simple-form/simpleFormPage";
import SinglePageFormPage from "./components/single-page-form/singlePageForm";
import Home from "./routes/home";
import MultiPageForm from "./routes/multi-page-form";
import NotFoundPage from "./routes/notFoundPage";

export default function App() {
	return (
		<div className="w-full flex flex-row place-content-center bg-gray-100">
			<div className="w-11/12 max-w-7xl min-h-screen flex flex-col ">
				<div className="bg-gray-100 h-full">
					<Router>
						<Header />
						<main className="px-4 py-8 bg-white">
							<Switch redirect="/">
								<Route
									path="/multi/:step"
									component={MultiPageForm}
									render={({ step }) => <MultiPageForm step={step} />}
								/>
								<Route exact path="/">
									<Home />
								</Route>
								<Route exact path="/simple/">
									<SimpleFormPage />
								</Route>
								<Route exact path="/single/">
									<SinglePageFormPage />
								</Route>
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
