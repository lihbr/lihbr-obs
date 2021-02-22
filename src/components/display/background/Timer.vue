<!-- HEALTH:UNKNOWN background-timer -->
<template>
  <switcher class="backgroundTimer" slow>
    <background-text
      v-if="running"
      key="timer"
      :style="{ fontSize: '660px', fontWeight: '900' }"
      :color="color"
    >
      {{ minutes }}:{{ seconds }}
    </background-text>
    <background-text
      v-else
      key="placeholder"
      :style="placeholder.style"
      :color="color"
    >
      {{ placeholder.value }}
    </background-text>
  </switcher>
</template>

<script>
import Switcher from "~/components/controls/Switcher.vue";
import BackgroundText from "~/components/display/background/Text.vue";

export default {
  components: {
    Switcher,
    BackgroundText
  },
  props: {
    color: {
      type: String,
      default: "navy"
    },
    end: {
      type: Number,
      default: null
    },
    placeholder: {
      type: Object,
      default: () => ({
        style: {},
        value: ""
      })
    }
  },
  data() {
    return {
      active: false,
      delta: -1
    };
  },
  computed: {
    running() {
      return this.delta >= 0;
    },
    minutes() {
      return `0${Math.floor(this.delta / 60)}`.slice(-2);
    },
    seconds() {
      return `0${this.delta % 60}`.slice(-2);
    }
  },
  watch: {
    timer(value) {}
  },
  mounted() {
    this.active = true;
    this.update();
  },
  destroyed() {
    this.active = false;
  },
  methods: {
    update() {
      if (this.end) {
        this.delta = Math.floor((this.end - Date.now()) / 1000);
      } else {
        this.delta = -1;
      }

      setTimeout(() => {
        if (this.active) {
          this.update();
        }
      }, 1000);
    }
  }
};
</script>
