<!-- HEALTH:UNKNOWN __layout__default -->
<template>
  <div class="__layout__default">
    <main id="main" class="main relative z-10">
      <slot :messages="messages" />
    </main>
    <chat
      :messages="messages"
      class="text-s fixed bottom-5 right-5"
      height="174px"
      width="393px"
      user-width="111px"
      body-width="272px"
    ></chat>
    <variation-12
      class="opacity-70 fixed"
      size="960px"
      :style="{ top: '272px', left: '-327px' }"
    ></variation-12>
  </div>
</template>

<script>
import ComfyJS from "comfy.js";

import Chat from "~/components/controls/Chat.vue";
import Variation12 from "~/components/display/Variation12.vue";

const themes = ["navy", "beet", "flamingo", "ochre", "butter", "mantis"];

const messages = [
  {
    user: "phoenixEvans",
    body: "Ut enim ad minima veniam, quis nostrum exercitationem.",
    color: "flamingo"
  },
  {
    user: "frankieBrooks",
    body:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    color: "butter"
  },
  {
    user: "kimberleySpencer",
    body:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Lorem ipsum.",
    color: "ochre"
  },
  {
    user: "joJosh",
    body: "Sisi ut aliquid ex ea commodi consequatur?",
    color: "mantis"
  }
];

export default {
  components: {
    Chat,
    Variation12
  },
  data() {
    return {
      theme: {
        current: ""
      },
      messages: []
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
  },
  watch: {
    "theme.current": function (theme) {
      document.documentElement.dataset.theme = theme;
    }
  },
  mounted() {
    console.log("hello");
    this.theme.current = "beet";

    ComfyJS.onChat = (user, message, flags, self, extra) => {
      this.messages.push({
        user,
        body: message,
        color: themes[Math.floor(Math.random() * themes.length)]
      });
      if (this.messages.length > 10) {
        this.messages.shift();
      }
    };

    ComfyJS.onCommand = (user, command, message, flags, extra) => {
      if (themes.includes(command)) {
        this.theme.current = command;
      }
    };

    ComfyJS.Init("lihbr");
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
