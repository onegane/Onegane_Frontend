import instance from "./instance";
import authorization from "./authorization";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserData } from "../state";

export const useLogout = () => {
  const navigate = useNavigate();
  const setUserData = useSetRecoilState(UserData);

  const logout = () => {
    try {
      instance.delete("/auth/logout", authorization());
      localStorage.clear();
      setUserData(null);
      navigate("/");
    } catch (e) {
      console.log(e);
      navigate("/error");
    }
  };

  return { logout };
};
