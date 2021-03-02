<template>
  <div class="pure-g">
    <img
      v-for="image in images"
      :key="image.lastModified"
      :src="image.url"
      class="pure-u-1"
    />
  </div>
</template>

<script>
export default {
  name: "DisplayImages",
  computed: {
    images() {
      return this.$store.state.images.map(image => ({
        lastModified: image.lastModified,
        url: URL.createObjectURL(image)
      }));
    }
  }
};
</script>
