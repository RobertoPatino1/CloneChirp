import { axi } from "./useAxios";
import { jwtDecode } from "jwt-decode";

export const loginRequest = async (data) => {
	const response = await axi.post("/users/login/", data);
	const { access, refresh } = response.data;
	// Using the local storage
	localStorage.setItem("access", access);
	localStorage.setItem("refresh", refresh);

	const user = jwtDecode(localStorage.getItem("access"));
	localStorage.setItem("username", user.username);
	localStorage.setItem("user_id", user.user_id);
	localStorage.setItem("avatar", user.avatar);
};
