import ComfyJS from "comfy.js";
import seedrandom from "seedrandom";

import themes from "~/assets/data/themes.json";

const dummyMessages = [
  {
    author: "phoenixEvans",
    body: "Ut enim ad minima veniam, quis nostrum exercitationem.",
    color: "flamingo"
  },
  {
    author: "frankieBrooks",
    body:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    color: "butter"
  },
  {
    author: "kimberleySpencer",
    body:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Lorem ipsum.",
    color: "ochre"
  },
  {
    author: "joJosh",
    body: "Sisi ut aliquid ex ea commodi consequatur?",
    color: "mantis"
  }
];

export const state = () => ({
  messages: [...dummyMessages]
});

export const mutations = {
  set(state, { key, value }) {
    state[key] = value;
  },
  newMessage(state, { author, body }) {
    if (author && body) {
      state.messages.push({
        author,
        body,
        color: themes[Math.floor(seedrandom(author)() * themes.length)]
      });
    }

    if (state.messages.length > 10) {
      this.messages.shift();
    }
  },
  prune(state) {
    state.messages = [];
  }
};

export const actions = {
  init({ commit }) {
    ComfyJS.Init(process.env.TWITCH_CHANNEL);

    ComfyJS.onChat = (user, message, flags, self, extra) => {
      commit("newMessage", { author: user, body: message });
    };

    ComfyJS.onCommand = (user, command, message, flags, extra) => {
      // commit("newMessage", { author: user, body: `!${command} ${message}` });

      if (themes.includes(command)) {
        commit("theme/change", command, { root: true });
      }

      if (["light", "dark"].includes(command)) {
        this.$colorMode.preference = command;
      }
    };
  }
};
