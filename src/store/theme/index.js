import themes from "~/assets/data/themes.json";

export const state = () => ({
  current: themes[0],
  penultimate: themes[1],
  antepenultimate: themes[2]
});

export const mutations = {
  set(state, { key, value }) {
    state[key] = value;
  },
  change(state, current) {
    if (themes.includes(current)) {
      state.antepenultimate = state.penultimate;
      state.penultimate = state.current;
      state.current = current;
    } else {
      console.warn(`Theme ${current} not found`);
    }
  }
};

export const actions = {
  init({ dispatch }) {
    dispatch("random", "any");
  },
  pageChanged({ dispatch }) {
    dispatch("random", "notCurrent");
  },
  random({ state, commit }, option = "new") {
    const possibleThemes = themes.filter(
      i => option === "any" || (option === "notCurrent" && i !== state.current)
    );

    commit(
      "change",
      possibleThemes[Math.floor(Math.random() * possibleThemes.length)]
    );
  }
};
