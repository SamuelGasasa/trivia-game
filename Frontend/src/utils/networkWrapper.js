import axios from "axios";
import { readCookie } from "./Cookies";

const getHttp = (url, tokenName) => {
  return axios.get(url, {
    headers: {
      authorization: "Bearer " + readCookie(tokenName),
    },
  });
};

export { getHttp };
