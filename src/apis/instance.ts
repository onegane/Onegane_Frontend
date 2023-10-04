import axios from "axios";
import authorization from "./authorization";

const instance = axios.create({
  baseURL: process.env.BaseURL,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (err) {
    if (err.response) {
      try {
        const newAccessToken = await instance.put(
          "http://api.onegane.kro.kr/api/auth/refresh",
          authorization()
        );

        localStorage.removeItem("accessToken");
        localStorage.setItem("accessToken", newAccessToken.data);
      } catch (e) {
        console.log(e);
        alert("다시 로그인해 주세요.");
        window.location.href = "/";
      }
    }
  }
);

export default instance;
