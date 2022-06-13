import { Route, Routes, Link, useMatch } from "react-router-dom";
import Issues from "./pages/Issues";
import Issue from "./pages/Issue";
import AddIssue from "./pages/AddIssue";
import { GithubUser } from "./components/GithubUser";
import APIStatus from "./components/APIStatus";

export default function App() {
	const isRootPath = useMatch({ path: "/", end: true });
	return (
		<div className="App">
			{!isRootPath ? (
				<Link to="/">Back to Issues List</Link>
			) : (
				<span>&nbsp;</span>
			)}
			<h1>Issue Tracker</h1>
			<Routes>
				<Route path="/" element={<Issues />} />
				<Route path="/status" element={<APIStatus />} />

				<Route
					path="/github"
					element={<GithubUser username="uidotdev" />}
				/>
				<Route path="/add" element={<AddIssue />} />
				<Route path="/issue/:number" element={<Issue />} />
			</Routes>
		</div>
	);
}
