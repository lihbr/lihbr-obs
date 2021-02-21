import fetch from "isomorphic-unfetch";

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
  }
};

export const actions = {
  init({ dispatch }) {
    dispatch("update");
  },
  async update({ commit, dispatch }) {
    const response = await fetch(process.env.CONFIG_URL);
    const result = await response.json();

    console.log(result);

    setTimeout(() => {
      dispatch("update");
    }, process.env.CONFIG_TIMEOUT);
  }
};
