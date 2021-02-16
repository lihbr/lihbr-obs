<!-- HEALTH:UNKNOWN variation12 -->
<template>
  <img
    class="variation12"
    alt="variation12"
    src="~/assets/img/variation12.svg"
    :style="{ width: size, height: size }"
  />
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "400px"
    }
  }
};
</script>

<style scoped>
.variation12 {
  animation: rotate 180s infinite linear;
  will-change: transform;
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
