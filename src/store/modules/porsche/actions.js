import axios from "axios";

export const actions = {
  INIT({ state, commit }) {
    return new Promise((resolve) => {
      commit("INITIALIZE_SCENE");
      commit("INITIALIZE_RENDERER");
      commit("INITIALIZE_LIGHT");
      commit("INITIALIZE_CONTROLS");
      commit("LOADER");

      const animate = function () {
        requestAnimationFrame(animate);
        state.renderer.render(state.scene, state.camera);
      };

      animate();
      resolve();
    });
  },
  async getPosition({ commit, dispatch }) {
    try {
      const response = await axios.get("/");
      const position = response.data;
      commit("INITIALIZE_CAMERA", position);
      dispatch("INIT");
    } catch (error) {
      alert(error);
    }
  },
  async updatePosition({ state }) {
    try {
      const payload = state.camera;
      await axios.put("/update", { ...payload });
    } catch (error) {
      alert(error);
    }
  },
};
