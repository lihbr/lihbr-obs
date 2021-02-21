<!-- HEALTH:UNKNOWN __page__solo-cam -->
<template>
  <div class="__page__solo-cam">
    <!-- background -->
    <solo-cam-svg
      class="fixed inset-0 w-full h-full text-cream dark:text-slate transition-color fill-current"
    />
    <svg width="0" height="0">
      <defs>
        <clipPath id="clipPath">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1920 0H0V1080H1920V0ZM910 130H350V930H910V130Z"
          />
        </clipPath>
      </defs>
    </svg>
    <!-- content -->
    <main
      class="fixed left-0 w-full z-10 flex justify-center"
      :style="{ top: '130px' }"
    >
      <camera size="800px" :color="$store.state.theme.current" class="mr-5" />
      <chat-wrapper
        class="relative"
        height="820px"
        width="400px"
        user-width="115px"
        body-width="275px"
      />
    </main>
  </div>
</template>

<script>
import ChatWrapper from "~/components/controls/chat/Wrapper.vue";
import Camera from "~/components/controls/Camera.vue";

import SoloCamSvg from "~/assets/masks/soloCam.svg";

export default {
  components: {
    ChatWrapper,
    Camera,

    SoloCamSvg
  },
  layout: "variation",
  head() {
    return this.$buildHead({
      path: this.$route.path
    });
  },
  mounted() {
    this.$store.dispatch("pageChanged");
  }
};
</script>

<style lang="sass">
html
  clip-path: url("#clipPath")
</style>
