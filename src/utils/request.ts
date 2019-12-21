import Taro from "@tarojs/taro";

const url = "https://xjtulpar.com/";

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
      "content-type": "application/x-www-form-urlencoded"
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
