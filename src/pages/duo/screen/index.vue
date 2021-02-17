<!-- HEALTH:UNKNOWN __page__duo-screen -->
<template>
  <div class="__page__duo-screen">
    <!-- background -->
    <duo-screen-svg
      class="fixed inset-0 w-full h-full text-cream dark:text-slate transition-color fill-current"
    />
    <svg width="0" height="0">
      <defs>
        <clipPath id="clipPath">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1920 0H0V1080H1920V0ZM1487 20H20V846H1487V20Z"
          />
        </clipPath>
      </defs>
    </svg>
    <!-- content -->
    <section
      class="fixed left-0 w-full top-0 z-10 flex justify-between mt-5 px-5"
      :style="{ height: '846px' }"
    >
      <main
        class="flex-1 mr-5 color color--current color--basic"
        :style="{ borderBottomWidth: '20px' }"
      />
      <aside :style="{ width: '393px' }" class="flex flex-col justify-between">
        <camera size="393px" :color="$store.state.theme.antepenultimate">
          Alex @trostcodes
        </camera>
        <camera size="393px" :color="$store.state.theme.penultimate">
          Lucie @li_hbr
        </camera>
      </aside>
    </section>
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

import DuoScreenSvg from "~/assets/masks/duoScreen.svg";

export default {
  components: {
    Camera,

    DuoScreenSvg
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
