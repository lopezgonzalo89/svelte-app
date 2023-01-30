<script>
  import { About, Text, Person } from "./components";
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
  <img src={svelteLogo} alt="Svelte logo" />
</main>

<style>
  :global(body) {
    background-color: #f2eee2;
    color: #0086f6;
  }

  :global(:root) {
    --theme-color: purple;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  main img {
    width: 30%;
  }

  h1 {
    color: #ff3e00;
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
