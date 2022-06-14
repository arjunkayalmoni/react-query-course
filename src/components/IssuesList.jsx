import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import IssueItem from "./IssueItem";

export default function IssuesList() {
	const issuesQuery = useQuery(["issues"], () =>
		axios.get("/api/issues").then((res) => res.data)
	);
	return (
		<div>
			<h2>Issues List</h2>
			{issuesQuery.isLoading ? (
				<p>Loading.....</p>
			) : (
				<ul className="issues-list">
					{/* <IssueItem key={ issue.id } { ...issue } /> */}
					{issuesQuery.data.map((issue) => (
						<IssueItem
							key={issue.id}
							title={issue.title}
							number={issue.number}
							assignee={issue.assignee}
							commentCount={issue.comments.length}
							createdBy={issue.createdBy}
							createdDate={issue.createdDate}
							labels={issue.labels}
							status={issue.status}
						/>
					))}
				</ul>
			)}
		</div>
	);
}
