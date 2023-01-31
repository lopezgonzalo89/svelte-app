<script>
  import { onMount } from "svelte";

  let photos = [];

  onMount(async () => {
    console.log("onMount");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );

    const data = await response.json();
    photos = data;
  });
</script>

<div class="Photos">
  {#each photos as photo}
    <figure>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <figcaption>{photo.title}</figcaption>
    </figure>
  {:else}
    <p>Loading...</p>
  {/each}
</div>

<style>
  .Photos {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
</style>
