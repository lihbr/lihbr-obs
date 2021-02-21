<!-- HEALTH:UNKNOWN switcher -->
<template>
  <div class="switcher" :class="{ slow }">
    <transition name="fade" mode="out-in">
      <slot />
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    slow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="sass" scoped>
.switcher
  .fade-enter-active, .fade-leave-active
    will-change: opacity
    @apply transition-opacity duration-1/2

  .fade-enter, .fade-leave-to
    @apply opacity-0

  &.slow
    .fade-enter-active, .fade-leave-active
      transition-duration: theme("transitionDuration.DEFAULT")
</style>
