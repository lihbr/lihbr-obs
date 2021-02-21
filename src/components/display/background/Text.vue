<!-- HEALTH:UNKNOWN background-text -->
<template>
  <div
    class="backgroundText leading-tight fixed opacity-10 dark:opacity-5 transition-color text-center"
    :class="{
      'text-navy-100': color === 'navy',
      'text-beet-100': color === 'beet',
      'text-flamingo-100': color === 'flamingo',
      'text-ochre-100': color === 'ochre',
      'text-butter-100': color === 'butter',
      'text-mantis-100': color === 'mantis'
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "navy"
    }
  }
};
</script>

<style lang="sass" scoped>
.backgroundText
  font-size: 660px
  letter-spacing: -0.05em
  top: 50%
  left: 1130px
  transform: translate(-50%, -50%)
  width: 200vw
</style>
