<!-- HEALTH:HIGH __layout__screen -->
<template>
  <div class="__layout__screen">
    <!-- floating -->
    <chat-wrapper
      class="fixed bottom-5 right-5 z-10"
      height="1040px"
      width="393px"
      user-width="111px"
      body-width="272px"
    />
    <background-variation-twelve
      class="opacity-70 fixed z-10"
      size="694px"
      :style="{ top: '193px', left: '185px' }"
    />
    <socials class="fixed left-0 w-full bottom-10 z-10" />
    <!-- scene -->
    <nuxt class="h-screen w-screen bg-cream dark:bg-slate transition-bg" />
  </div>
</template>

<script>
import ChatWrapper from "~/components/controls/chat/Wrapper.vue";

import Socials from "~/components/display/Socials.vue";
import BackgroundVariationTwelve from "~/components/display/background/VariationTwelve.vue";

export default {
  components: {
    ChatWrapper,
    Socials,
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
