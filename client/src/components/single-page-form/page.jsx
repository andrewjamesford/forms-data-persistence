import { Helmet } from "react-helmet";
import api from "../../api";

export default function () {
	const handleSubmit = () => {};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Helmet>
					<title>React State Form - Title & Category</title>
				</Helmet>
			</form>
		</>
	);
}
