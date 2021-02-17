<!-- HEALTH:HIGH __layout__fullscreen -->
<template>
  <div class="__layout__fullscreen">
    <!-- floating -->
    <chat-wrapper
      class="fixed bottom-5 right-5 z-10"
      height="174px"
      width="393px"
      user-width="111px"
      body-width="272px"
    />
    <variation-twelve
      class="opacity-70 fixed z-10"
      size="960px"
      :style="{ top: '272px', left: '-327px' }"
    />
    <!-- scene -->
    <nuxt />
  </div>
</template>

<script>
import ChatWrapper from "~/components/controls/chat/Wrapper.vue";
import VariationTwelve from "~/components/display/background/VariationTwelve.vue";

export default {
  components: {
    ChatWrapper,
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
