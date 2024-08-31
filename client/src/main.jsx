import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./app.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ErrorBoundary
			fallback={<div>Something went wrong</div>}
			onError={(error) => console.error(error)}
		>
			<App />
		</ErrorBoundary>
	</StrictMode>,
);
