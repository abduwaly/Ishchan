import { post } from "../utils/request";

const userCredentials = {
  loginame: "admin",
  password: "18e7d6b4a8a6603e74538d609d6f8056"
};

export function login() {
  post("user/login", userCredentials, () => {});
}
