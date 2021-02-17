<!-- HEALTH:UNKNOWN camera -->
<template>
  <div
    class="camera color color--basic"
    :style="{ borderBottomWidth: '20px' }"
    :class="`color--${color}`"
  >
    <div
      :style="{ width: size, height: size }"
      class="p-1 font-sub text-2xl text-cream text-right flex flex-row-reverse items-end"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "navy"
    },
    size: {
      type: String,
      default: "400px"
    }
  }
};
</script>
