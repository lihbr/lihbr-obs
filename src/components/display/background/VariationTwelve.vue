<!-- HEALTH:UNKNOWN background-variation-twelve -->
<template>
  <variation-twelve-svg
    :style="{ width: size, height: size }"
    class="backgroundVariationTwelve"
  />
</template>

<script>
import VariationTwelveSvg from "~/assets/img/variationTwelve.svg";

export default {
  components: {
    VariationTwelveSvg
  },
  props: {
    size: {
      type: String,
      default: "400px"
    }
  }
};
</script>

<style lang="sass" scoped>
.backgroundVariationTwelve
  animation: rotate 180s infinite linear
  will-change: transform

@keyframes rotate
  0%
    transform: rotateZ(0deg)
  100%
    transform: rotateZ(360deg)
</style>
