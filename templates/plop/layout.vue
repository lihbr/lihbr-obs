<!-- HEALTH:UNKNOWN __layout__{{ kebabCase name }} -->
<template>
  <div class="__layout__{{ kebabCase name }}">
    <main id="main" class="main">
      <slot />
    </main>
  </div>
</template>

<script>
// import Component from "~/components/Component.vue";

export default {
  components: {
    // Component
  },
  data() {
    return {
      theme: {
        current: "beet"
      }
    };
  },
  head() {
    const script = [];

    return {
      htmlAttrs: {
        "data-theme": this.theme.current
      },
      script
    };
  }
};
</script>

<style>
html {
  font-size: 16px; /* don't change this! */
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
</style>
