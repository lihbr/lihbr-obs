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
        Lucie @li_hbr
      </camera>
      <camera size="716px" :color="$store.state.theme.antepenultimate">
        Alex @trostcodes
      </camera>
    </main>
    <footer class="fixed left-0 w-full bottom-0 z-10">
      <section
        class="flex flex-col justify-center mx-auto mb-5 stack-2"
        :style="{ width: '620px', height: '174px' }"
      >
        <h1 class="heading-h1 color color--current color--basic">
          Setting up the Slice Builder
        </h1>
        <p class="paragraph-lead">
          Join us for #SliceContest!
          <span class="underline">s.lihbr.com/slice-contest</span>
        </p>
      </section>
    </footer>
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
  layout: "fullscreen",
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
