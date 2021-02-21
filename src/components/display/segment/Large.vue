<!-- HEALTH:UNKNOWN segment-large -->
<template>
  <section
    class="segmentLarge flex flex-col justify-center stack-2"
    :style="{ width, height }"
  >
    <h1 class="heading-h1 color color--current color--basic">
      {{ segment.title }}
    </h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="paragraph-lead" v-html="description" />
  </section>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "600px"
    },
    height: {
      type: String,
      default: "200px"
    },
    segment: {
      type: Object,
      default: () => ({ title: "", description: "" })
    }
  },
  computed: {
    description() {
      return this.segment.description.replace(
        /([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g,
        '<span class="underline">$1$2</span>'
      );
    }
  }
};
</script>
