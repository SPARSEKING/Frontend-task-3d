<template>
  <div id="container"></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["INIT", "getPosition", "updatePosition"]),
  },
  computed: {
    ...mapGetters(["getData"]),
  },
  created() {
    this.getPosition();
    document.addEventListener("mouseup", this.updatePosition);
  },
};
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}
canvas {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}
</style>
