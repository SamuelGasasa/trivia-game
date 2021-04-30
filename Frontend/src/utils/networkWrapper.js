import axios from "axios";
import { readCookie } from "./cookies";

const getHttp = (url, tokenName) => {
  return axios.get(url, {
    headers: {
      authorization: "Bearer " + readCookie(tokenName),
    },
  });
};

const postHttp = (url, tokenName) => {
  return axios.post(url, { refreshToken: readCookie(tokenName) });
};

export { getHttp, postHttp };
