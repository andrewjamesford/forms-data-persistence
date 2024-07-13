import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.jsx";

import "./index.css";

const auth0config = {
	domain: import.meta.env.VITE_AUTH0_DOMAIN,
	clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
	authorizationParams: {
		audience: import.meta.env.VITE_AUTH0_AUDIENCE,
		redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI,
		scope: import.meta.env.VITE_AUTH0_SCOPES,
	},
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Auth0Provider {...auth0config}>
			<ErrorBoundary fallback={<div>Something went wrong</div>}>
				<App />
			</ErrorBoundary>
		</Auth0Provider>
	</StrictMode>,
);
