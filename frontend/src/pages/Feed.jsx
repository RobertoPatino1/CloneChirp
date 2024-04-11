import { logout } from "../api/users";
const Feed = () => {
	return (
		<div>
			Feed
			<button onClick={logout}>LOGOUT</button>
		</div>
	);
};

export default Feed;
