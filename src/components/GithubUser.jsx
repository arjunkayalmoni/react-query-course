import { useQuery } from "react-query";
import axios from "axios";

const baseUrl = import.meta.env.VITE_GITHUB_API;
const fetchUser = ({ queryKey }) => {
	const [username] = queryKey;
	return axios.get(baseUrl + `/users/${username}`).then((res) => res.data);
};

export const GithubUser = ({ username }) => {
	const userQuery = useQuery([username], fetchUser);

	if (useQuery.isLoading) return <p>Loading.....</p>;
	if (userQuery.isError)
		return <p style={{ color: "red" }}>Error: {userQuery.error.message}</p>;

	if (userQuery.isSuccess) {
		console.log({ data: userQuery.data });
		return <pre>{JSON.stringify(userQuery.data, null, 2)}</pre>;
	}
};
