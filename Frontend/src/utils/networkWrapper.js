import axios from "axios";
import { readCookie, createCookie } from "./cookies";

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
      if (err.message.slice(-3) === "403") {
        const cookie = readCookie("accessToken");
        if (!cookie)
          return axios
            .post("/users/token", {
              refreshToken: readCookie("refreshToken"),
            })
            .then((data) => {
              createCookie("accessToken", data.data.authorization, 5000);
              err.config.headers["authorization"] =
                "Bearer " + data.data.authorization;
              console.log(err.config);
              return axios.request(err.config);
            });
      }
      return Promise.reject(err);
    }
  );
};

export { getHttp, intercept };
