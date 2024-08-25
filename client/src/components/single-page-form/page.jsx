import { Helmet } from "react-helmet";
import api from "../../api";

export default function () {
	const handleSubmit = () => {};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Helmet>
					<title>Single Page Form</title>
				</Helmet>
				<h1 className="mt-4 text-2xl font-bold">What are you listing?</h1>
			</form>
		</>
	);
}
