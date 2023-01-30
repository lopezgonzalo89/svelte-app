<script>
  let skills = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 5,
      name: "Svelte",
    },
  ];
</script>

<div class="Skills">
  <h3>Skills</h3>
  <ul>
    {#each skills as { name }}
      <li>
        <p>{name}</p>
      </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline;
    margin: 0 0 0 0.4rem;
  }

  .Skills {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    display: inline;
  }
</style>
