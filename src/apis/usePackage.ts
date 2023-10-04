import instance from "./instance";
import authorization from "./authorization";
import { useNavigate } from "react-router-dom";

export const usePackage = () => {
  const navigate = useNavigate();

  const regiserPackage = async (packname: string, packnumber: number) => {
    try {
      const postdata = await instance.post(
        "http://api.onegane.kro.kr/api/number",
        {
          trackingNumber: packnumber,
          parcelNickname: packname,
        },
        authorization()
      );
      console.log(postdata);
      return postdata;
    } catch (e) {
      console.log(e);
    }
  };

  const deletePackage = async (id: number) => {
    try {
      const deletedata = await instance.delete(
        `http://api.onegane.kro.kr/api/number/${id}`,
        authorization()
      );
      console.log("삭제 완료!");
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return { regiserPackage, deletePackage };
};
