import * as C from "../../components/index";
import SendUserCode from "../../apis/useSendUserCode";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RendingPage = () => {
  SendUserCode();

  return (
    <>
      <C.Header />
      <C.Main />
    </>
  );
};

export default RendingPage;
