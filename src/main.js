import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Gonzalo",
    lastName: "Lopez",
  },
});

export default app;
