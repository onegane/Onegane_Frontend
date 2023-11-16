import axios from "axios";
import authorization from "./authorization";
import { Base_URL } from "../constants";

const instance = axios.create({
  baseURL: Base_URL,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (err) {
    if (err.response) {
      try {
        localStorage.clear();
        alert("다시 로그인해 주세요.");
        window.location.href = "/";
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    }
  }
);

export default instance;
