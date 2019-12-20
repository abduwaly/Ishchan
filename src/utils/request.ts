import Taro from "@tarojs/taro";

// const url = "https://tcb-api.tencentcloudapi.com/";
const url = "http://localhost:8080/";

export function get(path: string, onSuccess: Function, onError?: Function) {
  Taro.request({
    url: url + path,
    method: "GET"
  })
    .then(res => {
      console.log(res.data, res.statusCode, res.header);
      onSuccess(res);
    })
    .catch(err => {
      console.error(err);
      onError && onError(err);
    });
}

export function post(
  path: string,
  data: object,
  onSuccess: Function,
  onError?: Function
) {
  Taro.request({
    url: url + path,
    data: data,
    method: "POST",
    header: {
      "content-type": "application/json"
    }
  })
    .then(res => {
      console.log(res.data, res.statusCode, res.header);
      onSuccess(res);
    })
    .catch(err => {
      console.error(err);
      onError && onError(err);
    });
}
