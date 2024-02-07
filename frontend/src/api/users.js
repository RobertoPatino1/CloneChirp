import { axi } from "./useAxios";

export const loginRequest = async (data) => {
  await axi.post("/users/login/", data);
};
