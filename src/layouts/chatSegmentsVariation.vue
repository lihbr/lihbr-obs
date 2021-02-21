<!-- HEALTH:HIGH __layout__chatSegmentsVariation -->
<template>
  <div class="__layout__chatSegmentsVariation">
    <!-- floating -->
    <chat-wrapper
      class="fixed bottom-5 right-5 z-10"
      height="174px"
      width="393px"
      user-width="111px"
      body-width="272px"
    />
    <switcher class="fixed left-0 w-full bottom-0 z-10">
      <template v-for="(segment, index) in segments">
        <segment-large
          v-if="segment.active"
          :key="`${segment.title}-${index}`"
          class="mx-auto mb-5"
          :segment="segment"
          width="620px"
          height="174px"
        />
      </template>
    </switcher>
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
import ChatWrapper from "~/components/controls/chat/Wrapper.vue";
import Switcher from "~/components/controls/Switcher.vue";
import SegmentLarge from "~/components/display/segment/Large.vue";
import BackgroundVariationTwelve from "~/components/display/background/VariationTwelve.vue";

export default {
  components: {
    ChatWrapper,
    Switcher,
    SegmentLarge,
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
    },
    segments() {
      return this.$store.state.config.segments;
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

  background: #000000

  &.dark
    @apply text-cream

body
  @apply h-screen w-screen
</style>
