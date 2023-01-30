<script>
  import { About, Text, Person, Skills } from "./components";
  export let name, lastName, year;
  let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";
  const data = {
    name: "Gonzalo",
    lastName: "Lopez",
  };
</script>

<main>
  <h1>{name} {lastName} {year}!</h1>
  <Person {...data} />
  <Text text="I'm a Frontend Developer" />
  <About />
  <Skills />
  <img src={svelteLogo} alt="Svelte logo" />
</main>

<style>
  :global(body) {
    background-color: var(--theme-color-background);
    color: var(--theme-color-default);
  }

  :global(:root) {
    --theme-color-default: #0086f6;
    --theme-color-primary: purple;
    --theme-color-primary-dark: #bf2c7c;

    --theme-color-background: #f2eee2;
    --theme-color-background-dark: #1d3040;

    --theme-color-secondary: #ff3e00;
    --theme-color-secondary-dark: #f4b400;
  }

  :global(body.dark-mode) {
    background-color: var(--theme-color-background-dark);
    color: var(--theme-color-primary-dark);
  }

  :global(body.dark-mode h1) {
    /* TODO: Remove !important */
    color: var(--theme-color-secondary-dark) !important;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  main img {
    width: 80%;
    height: 100%;
  }

  h1 {
    color: var(--theme-color-secondary);
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
