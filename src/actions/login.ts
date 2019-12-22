import Taro from "@tarojs/taro";
import { post } from "../utils/request";

type LoginPayload = {
  name: string;
  password: string;
};

export function login(payload: LoginPayload) {
  // TODO: remove after Backend rename props
  const userCredentials = {
    loginame: payload.name,
    password: payload.password
  };

  post("user/login", userCredentials, res => {
    Taro.setStorage({
      key: "cookie",
      data: "JSESSIONID=" + res.data.data.sessionId
    })
      .then(msg => {
        console.log("Login Succeed !", msg);
      })
      .catch(err => console.error("Login Failed !", err));
  });
}
