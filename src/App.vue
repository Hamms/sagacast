<template>
  <div class="pure-g">
    <div id="left-column" class="pure-u-1-5 column"></div>

    <div id="center-column" class="pure-u-3-5 column">
      <DisplayImages />
      <AddImagesInterface />
    </div>

    <div id="right-column" class="pure-u-1-5 column"></div>
  </div>
</template>

<script>
import AddImagesInterface from "./components/AddImagesInterface.vue";
import DisplayImages from "./components/DisplayImages.vue";

export default {
  name: "App",
  components: {
    AddImagesInterface,
    DisplayImages
  }
};
</script>
