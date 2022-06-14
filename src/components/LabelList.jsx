import { useQuery } from "react-query";
import axios from "axios";

const labelsUrl = "https://ui.dev/api/courses/react-query/labels";

export default function LabelList() {
	const labelsQuery = useQuery(["labels"], () =>
		axios.get(labelsUrl).then((res) => res.data)
	);

	return (
		<div>
			<h3>Labels</h3>
			{labelsQuery.isLoading && <p>Loading.....</p>}
			{labelsQuery.isError && (
				<p style={{ color: "red" }}>
					Error: {labelsQuery.error.message}
				</p>
			)}

			{labelsQuery.isSuccess && (
				<ul>
					{labelsQuery.data.map((label) => (
						<li key={label.id} className="labels">
							<span style={{ color: label.color }}></span>
							{label.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
