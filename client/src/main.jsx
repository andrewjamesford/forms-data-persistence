import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "@/components/errorMessage";
import App from "@/app.jsx";

import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ErrorBoundary
			fallback={<ErrorMessage message="Something went wrong" />}
			onError={(error) => console.error(error)}
		>
			<App />
		</ErrorBoundary>
	</StrictMode>,
);
