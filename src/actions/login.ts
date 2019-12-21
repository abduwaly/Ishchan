import Taro from "@tarojs/taro";
import { post } from "../utils/request";

const userCredentials = {
  loginame: "admin",
  password: "18e7d6b4a8a6603e74538d609d6f8056"
};

export function login() {
  post("user/login", userCredentials, res => {
    console.log("res:", res);
    Taro.setStorage({
      key: "cookie",
      data: res.cookies[0]
    })
      .then(msg => {
        console.log("Login Succeed !", msg);
      })
      .catch(err => console.error("Login Failed !", err));
  });
}
