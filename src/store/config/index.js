import fetch from "isomorphic-unfetch";
import seedrandom from "seedrandom";

import themes from "~/assets/data/themes.json";

export const state = () => ({
  people: {
    host: "Lucie @li_hbr",
    guest: ""
  },
  timer: {
    end: null
  },
  segments: [],
  cta: [],
  _meta: []
});

export const mutations = {
  set(state, { key, value }) {
    state[key] = value;
  },
  updateConfig(state, { key, value, meta }) {
    state[key] = value;
    state._meta[key] = meta;
  }
};

export const actions = {
  init({ dispatch }) {
    dispatch("update");
  },
  async update({ state, commit, dispatch }) {
    try {
      const response = await fetch(process.env.CONFIG_URL);
      const result = await response.json();

      let changed = false;
      ["people", "timer", "segments", "cta"].forEach(key => {
        if (result._meta[key] !== state._meta[key]) {
          commit("updateConfig", {
            key,
            value: result[key],
            meta: result._meta[key]
          });

          console.info(`Updated config for ${key}`);
          changed = true;
        }
      });

      if (changed) {
        const theme =
          themes[
            Math.floor(
              seedrandom(JSON.stringify(result._meta))() * themes.length
            )
          ];

        commit("theme/change", theme, { root: true });
      } else {
        console.info("No change to config detected");
      }
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      dispatch("update");
    }, process.env.CONFIG_TIMEOUT);
  }
};
