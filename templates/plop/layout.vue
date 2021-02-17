<!-- HEALTH:UNKNOWN __layout__{{ kebabCase name }} -->
<template>
  <div class="__layout__{{ kebabCase name }}">
    <main id="main" class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
// import Component from "~/components/Component.vue";

export default {
  components: {
    // Component
  },
  head() {
    const script = [];

    return {
      htmlAttrs: {
        "data-theme": this.theme.current
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
  @apply antialiased box-border font-main font-light text-slate bg-cream-900 overflow-hidden

  &.dark
    @apply text-cream bg-slate-900
</style>
