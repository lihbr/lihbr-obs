<!-- HEALTH:UNKNOWN __page__screen-brb -->
<template>
  <div class="__page__screen-brb">
    <!-- background -->
    <background-text :style="kaomoji.style" :color="theme.current">
      {{ kaomoji.value }}
    </background-text>
    <!-- content -->
    <main
      class="flex flex-col h-full justify-center stack-5"
      :style="{ marginLeft: '917px', maxWidth: '800px' }"
    >
      <h1
        class="font-sub leading-none color color--current color--basic"
        :style="{ fontSize: '150px' }"
      >
        Be Right Back~
      </h1>
      <p class="paragraph-lead">No fighting while I’m away!</p>
    </main>
  </div>
</template>

<script>
import kaomoji from "~/assets/data/kaomoji.json";

import BackgroundText from "~/components/display/background/Text.vue";

export default {
  components: {
    BackgroundText
  },
  layout: "screen",
  data() {
    return {
      kaomoji: kaomoji.shrug
    };
  },
  head() {
    return this.$buildHead({
      path: this.$route.path
    });
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    }
  },
  mounted() {
    this.$store.dispatch("pageChanged");
  }
};
</script>
