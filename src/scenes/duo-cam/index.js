import "@fontsource/antic-slab/latin-400.css";
import "@fontsource/roboto/latin-300.css";
import "@fontsource/roboto/latin-300-italic.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/roboto/latin-500-italic.css";
import "@fontsource/roboto/latin-700.css";
import "@fontsource/roboto/latin-700-italic.css";

import Vue from "vue";
import index from "./index.vue";

new Vue({ render: createElement => createElement(index) }).$mount("#app");
