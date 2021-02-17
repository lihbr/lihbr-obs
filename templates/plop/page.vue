<!-- HEALTH:UNKNOWN __page__{{ kebabCase route }} -->
<template>
  <div class="__page__{{ kebabCase route }}">
    {{ pascalCase route }}
  </div>
</template>

<script>
// import Component from "~/components/Component.vue";

export default {
  components: {
    // Component
  },
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

<style lang="sass" scoped>
// .__page__{{ kebabCase route }}
</style>
