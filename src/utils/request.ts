import Taro from "@tarojs/taro";

const domain = "https://xjtulpar.com/";

export function get(path: string, onSuccess: Function, onError?: Function) {
  const cookie = Taro.getStorageSync("cookie");

  Taro.request({
    url: domain + path,
    method: "GET",
    header: {
      cookie: cookie
    }
  })
    .then(res => {
      console.log("success:", res);

      // TODO: Below code handle invalid/outdated session.(will refactor)
      if (typeof res.data === "string") {
        console.error("Invalid Session");
        Taro.navigateTo({
          url: "/pages/login/login"
        });
      } else {
        onSuccess(res);
      }
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
  const cookie = Taro.getStorageSync("cookie");

  Taro.request({
    url: domain + path,
    data: data,
    method: "POST",
    header: {
      "content-type": "application/x-www-form-urlencoded",
      cookie: cookie
    }
  })
    .then(res => {
      console.log("success:", res);

      // TODO: Below code handle invalid/outdated session.(will refactor)
      if (typeof res.data === "string") {
        console.error("Invalid Session");
        Taro.navigateTo({
          url: "/pages/login/login"
        });
      } else {
        onSuccess(res);
      }
    })
    .catch(err => {
      console.error(err);
      onError && onError(err);
    });
}
