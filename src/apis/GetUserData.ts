import axios from "axios";
import { useRecoilState } from "recoil";
import { UserData } from "../state";

const GetUserData = () => {
  const [userData, setUserData] = useRecoilState(UserData);
};

export default GetUserData;
