<!-- HEALTH:HIGH __layout__default -->
<template>
  <div class="__layout__default">
    <!-- floating -->
    <div class="flex h-screen justify-center items-center">
      <variation-twelve class="opacity-70" size="80vmin" />
    </div>
    <!-- /floating -->
  </div>
</template>

<script>
import VariationTwelve from "~/components/display/background/VariationTwelve.vue";

export default {
  components: {
    VariationTwelve
  },
  head() {
    const script = [];

    return {
      htmlAttrs: {
        "data-theme": this.theme.current,
        "data-theme-penultimate": this.theme.penultimate,
        "data-theme-antepenultimate": this.theme.antepenultimate
      },
      script
    };
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    }
  },
  mounted() {
    this.$store.dispatch("init");
  }
};
</script>

<style lang="sass">
html
  font-size: 16px // don't change this!
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  margin-right: calc(100% - 100vw)
  @apply antialiased box-border font-main font-light text-slate overflow-hidden bg-transparent transition-color

  &.dark
    @apply text-cream

body
  @apply h-screen w-screen
</style>
