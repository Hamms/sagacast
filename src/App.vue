<template>
  <div class="pure-g">
    <div id="left-column" class="pure-u-1-5 column">
      <HelloWorld msg="Left" />
    </div>

    <div id="center-column" class="pure-u-3-5 column">
      <HelloWorld msg="Center" />
    </div>

    <div id="right-column" class="pure-u-1-5 column">
      <HelloWorld msg="Right" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>
