import axios from "axios";
import { useQuery } from "react-query";

const url = "https://ui.dev/api/courses/react-query/status";

const fetchStatus = () => axios.get(url).then((res) => res.data);

export default function APIStatus() {
	const statusQuery = useQuery(["status"], fetchStatus);

	if (statusQuery.isLoading) return <p>Loading.....</p>;
	if (statusQuery.isError)
		return (
			<p style={{ color: "red" }}>Error: {statusQuery.error.message}</p>
		);

	if (statusQuery.isSuccess) {
		console.log({ data: statusQuery.data });
		return <pre>{JSON.stringify(statusQuery.data, null, 2)}</pre>;
	}
}
