import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserData = atom({
  default: null,
  key: "userdata",
  effects: [persistAtom],
});
