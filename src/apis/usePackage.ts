import instance from "./instance";
import authorization from "./authorization";
export const usePackage = () => {
  const regiserPackage = async (packname: string, packnumber: string) => {
    if (packname !== "" && packnumber !== "") {
      const postdata = await instance.post(
        "/number",
        {
          trackingNumber: packnumber,
          parcelNickname: packname,
        },
        authorization()
      );
      alert("택배가 등록되었습니다.");
      return postdata;
    } else {
      alert("값을 모두 입력해주세요");
    }
  };

  const deletePackage = async (id: number) => {
    try {
      const deletedata = await instance.delete(
        `/number/${id}`,
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
