import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Svelte",
    lastName: "JS",
    year: 2023,
  },
});

export default app;
