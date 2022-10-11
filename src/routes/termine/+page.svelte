<script lang="ts">
  import { onMount } from 'svelte';
  import Time from 'svelte-time';
  import axios from 'axios';
  import showdown from 'showdown';

  let converter = new showdown.Converter();
  function convertMarkDown(input) {
    return converter.makeHtml(input);
  }

  let appointments;
  onMount(async () => {
    const res = await axios.get('/api/termine');
    appointments = (await res.data) as Array<Object>;
  });
</script>

<svelte:head>
  <title>Hahnheim eSports - Retro LAN Party - TERMINE</title>
</svelte:head>

<section class="max-w-6xl mx-auto py-10">
  <h1>Unsere Termine für 2022</h1>
  <div class="spacer" />
  <div class="grid grid-cols-5 gap-5">
    <div class="col-span-2">
      {#if appointments}
        {#each appointments as { name, description, date }}
          <h3><Time timestamp={date} format="DD.MM.YYYY" /></h3>
          {#if name}<p>{name}</p>{/if}
          {#if description}<p>{description}</p>{/if}
        {/each}
      {/if}
    </div>
    <div class="col-span-3 imageContainer">
      <img src="termine.webp" alt="Termine" />
    </div>
  </div>
</section>

<style lang="postcss">
  h3 {
    padding-bottom: 0.5rem;
  }
  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
