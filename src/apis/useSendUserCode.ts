import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSendUserCode = () => {
  const navigate = useNavigate();
  const userCode = new URLSearchParams(window.location.search).get("code"); //useParams

  if (userCode) {
    console.log(userCode);
    axios
      .post(`http://api.onegane.kro.kr/api/auth/bsm?code=${userCode}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  }
};

export default useSendUserCode;
