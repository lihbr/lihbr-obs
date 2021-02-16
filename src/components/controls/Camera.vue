<!-- HEALTH:UNKNOWN camera -->
<template>
  <div
    class="camera bg-cyan"
    :style="{ borderBottomWidth: '20px' }"
    :class="{
      'border-navy': color === 'navy',
      'border-beet': color === 'beet',
      'border-flamingo': color === 'flamingo',
      'border-ochre': color === 'ochre',
      'border-butter': color === 'butter',
      'border-mantis': color === 'mantis'
    }"
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
    name: {
      type: String,
      default: ""
    },
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
