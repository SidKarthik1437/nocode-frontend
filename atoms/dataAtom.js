import { atom } from "recoil";

export const dataStore = atom({
  key: "dataStore",
  default: [],
});

export const CurrentFileStore = atom({
  key: "currentFileStore",
  default: {},
});
