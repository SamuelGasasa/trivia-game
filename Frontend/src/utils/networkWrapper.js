import axios from "axios";
import { readCookie, createCookie, eraseCookie } from "./cookies";

const getHttp = (url, tokenName) => {
  return axios.get(url, {
    headers: {
      authorization: "Bearer " + readCookie(tokenName),
    },
  });
};

const intercept = () => {
  axios.interceptors.response.use(
    (response) => response,
    (err) => {
      const refreshToken = readCookie("refreshToken");
      if (err.message.slice(-3) === "403" && refreshToken) {
        const accessToken = readCookie("accessToken");
        if (!accessToken)
          return axios
            .post("/users/token", {
              refreshToken: refreshToken,
            })
            .then((data) => {
              createCookie("accessToken", data.data.authorization, 10000);
              err.config.headers["authorization"] =
                "Bearer " + data.data.authorization;
              return axios.request(err.config);
            })
            .catch((err) => {
              console.log(err);
              eraseCookie("refreshToken");
            });
      }
      return Promise.reject(err);
    }
  );
};

export { getHttp, intercept };
