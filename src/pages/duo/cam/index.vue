<!-- HEALTH:UNKNOWN __page__duo-cam -->
<template>
  <div class="__page__duo-cam">
    <!-- background -->
    <duo-cam-svg
      class="fixed inset-0 w-full h-full text-cream dark:text-slate transition-color fill-current"
    />
    <svg width="0" height="0">
      <defs>
        <clipPath id="clipPath">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1920 0H0V1080H1920V0ZM734 130H234V846H734V130Z"
          />
        </clipPath>
      </defs>
    </svg>
    <!-- content -->
    <main
      class="fixed left-0 w-full z-10 flex justify-center"
      :style="{ top: '130px' }"
    >
      <camera size="716px" :color="$store.state.theme.penultimate" class="mr-5">
        {{ people.host }}
      </camera>
      <camera size="716px" :color="$store.state.theme.antepenultimate">
        {{ people.guest }}
      </camera>
    </main>
  </div>
</template>

<script>
import Camera from "~/components/controls/Camera.vue";

import DuoCamSvg from "~/assets/masks/duoCam.svg";

export default {
  components: {
    Camera,

    DuoCamSvg
  },
  layout: "chatSegmentsVariation",
  head() {
    return this.$buildHead({
      path: this.$route.path
    });
  },
  computed: {
    people() {
      return this.$store.state.config.people;
    }
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
