<!-- HEALTH:HIGH __layout__variation -->
<template>
  <div class="__layout__variation">
    <!-- floating -->
    <background-variation-twelve
      class="opacity-70 fixed z-10"
      size="960px"
      :style="{ top: '272px', left: '-327px' }"
    />
    <!-- scene -->
    <nuxt />
  </div>
</template>

<script>
import BackgroundVariationTwelve from "~/components/display/background/VariationTwelve.vue";

export default {
  components: {
    BackgroundVariationTwelve
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
