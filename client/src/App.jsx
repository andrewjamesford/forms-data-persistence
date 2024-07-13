import Router, { Switch, Route } from "crossroad";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Formik from "./routes/formik";
import Home from "./routes/home";
import HookForm from "./routes/hookForm";
import State from "./routes/state";
import Header from "./components/Header";
import Footer from "./components/Footer";

const fontHeading = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-heading",
});

const fontBody = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-body",
});

const App = () => {
	return (
		<div className={cn("antialiased", fontHeading.variable, fontBody.variable)}>
			<Header />
			<Router>
				<Switch redirect="/">
					<Route exact path="/" component={<Home />} />
					<Route exact path="/formik" component={<Formik />} />
					<Route exact path="/hook-form" component={<HookForm />} />
					<Route exact path="/state" component={<State />} />
					<Route path="*" component={<NotFoundPage />} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
};

export default App;
