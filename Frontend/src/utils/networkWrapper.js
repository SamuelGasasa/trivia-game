import axios from "axios";
import { readCookie } from "./cookies";

const getHttp = (url, tokenName) => {
  return axios.get(url, {
    headers: {
      authorization: "Bearer " + readCookie(tokenName),
    },
  });
};

const postHttp = (tokenName) => {};

export { getHttp, postHttp };
