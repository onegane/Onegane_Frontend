import authorization from "./authorization";
import instance from "./instance";

export const useGetList = () => {
  const getList = async () => {
    try {
      const listData = await instance.get(
        "http://api.onegane.kro.kr/api/number",
        authorization()
      );
      return listData.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { getList };
};
