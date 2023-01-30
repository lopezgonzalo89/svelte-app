<script>
  export let name;
  export let lastName;
  let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";
</script>

<main>
  <h1>Hello {name} {lastName}!</h1>
  <p>Frontend Developer</p>
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
    font-size: 4em;
    font-weight: 100;
  }

  p {
    color: var(--theme-color);
    font-size: 22px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
