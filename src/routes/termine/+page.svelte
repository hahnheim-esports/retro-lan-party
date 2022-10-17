<script lang="ts">
  import { myclient } from '$lib/graphql-client';
  import { setClient, query } from 'svelte-apollo';
  import { GET_APPOINTMENTS } from '../../queries';
  import Time from 'svelte-time';
  import LOADER from '../../components/loader.svelte';

  setClient(myclient);
  const appointments = query(GET_APPOINTMENTS);
</script>

<svelte:head>
  <title>Hahnheim eSports - Retro LAN Party - TERMINE</title>
</svelte:head>

<section class="max-w-6xl mx-auto py-10">
  {#if $appointments.loading}
    <div class="innerContainer">
      <LOADER />
    </div>
  {:else if $appointments.error}
    <p>Ein Fehler ist aufgetreten: {$appointments.error.message}</p>
  {:else if $appointments.data}
    <h1>Unsere Termine für 2022</h1>
    <div class="spacer" />
    <div class="grid grid-cols-5 gap-5">
      <div class="col-span-2">
        {#each $appointments.data.appointments as { name, description, date }}
          <h3><Time timestamp={date} format="DD.MM.YYYY" /></h3>
          {#if name}<p>{name}</p>{/if}
          {#if description}<p>{description}</p>{/if}
        {/each}
      </div>
      <div class="col-span-3 imageContainer">
        <img src="termine.webp" alt="Termine" />
      </div>
    </div>
  {/if}
</section>

<style lang="postcss">
  .innerContainer {
    @apply flex justify-center items-center;
    min-height: calc(100vh - 340px);
  }
  h3 {
    padding-bottom: 0.5rem;
  }
  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
