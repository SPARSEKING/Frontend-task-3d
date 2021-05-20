import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const state = {
  camera: null,
  scene: null,
  renderer: null,
  controls: null,
  light: null,
};

export const porsche = {
  state,
  getters,
  actions,
  mutations,
};
