<script>
  export let name = "World";
</script>

<div class="Input">
  <input type="text" placeholder="Enter your name" bind:value={name} />
  <p>Hello {name}!</p>
</div>
