<template>
  <form class="pure-form">
    <label>
      Add Image(s)
      <input
        @change="handleChange"
        accept="image/png, image/jpeg"
        multiple
        type="file"
      />
    </label>
  </form>
</template>

<script>
export default {
  name: "AddImagesInterface",
  props: {},
  methods: {
    handleChange(event) {
      this.$store.commit("addImages", event.target.files);
    }
  }
};
</script>
