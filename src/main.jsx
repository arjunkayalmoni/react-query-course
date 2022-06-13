import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { worker } from "@uidotdev/react-query-api";
import { QueryClient, QueryClientProvider } from "react-query";

const container = document.querySelector("#root");
const root = createRoot(container);
const client = new QueryClient();

new Promise((res) => setTimeout(res, 100))
	.then(() =>
		worker.start({
			quiet: true,
			onUnhandledRequest: "bypass",
		})
	)
	.then(() => {
		root.render(
			<React.StrictMode>
				<QueryClientProvider client={client}>
					<BrowserRouter>
						<div className="container">
							<App />
						</div>
					</BrowserRouter>
				</QueryClientProvider>
			</React.StrictMode>
		);
	});
