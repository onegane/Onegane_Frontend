import instance from "./instance";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserData } from "../state";
import authorization from "./authorization";

export const useLogin = async () => {
  const navigate = useNavigate();
  const userCode = new URLSearchParams(window.location.search).get("code");
  const setUserData = useSetRecoilState(UserData);

  if (userCode) {
    try {
      const response = instance.post(`/auth/bsm?code=${userCode}`);
      const token = await response;
      console.log(token);

      localStorage.setItem("accessToken", token.data.accessToken);
      localStorage.setItem("refreshToken", token.data.refreshToken);

      const resdata = await instance.get("/auth", authorization());
      const userdata = resdata;
      setUserData(userdata);

      console.log(userdata);
      navigate("/");
    } catch (e) {
      console.log(e);
      navigate("/error");
    }
  }
};
