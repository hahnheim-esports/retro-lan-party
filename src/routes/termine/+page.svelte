<script lang="ts">
  import { myclient } from '$lib/graphql-client';
  import { setClient, query } from 'svelte-apollo';
  import { GET_APPOINTMENTS } from '../../queries';
  import Time from 'svelte-time';
  import LOADER from '../../components/loader.svelte';
  import CONTACTWIDGET from '../../components/contact-widget.svelte';

  setClient(myclient);
  const appointments = query(GET_APPOINTMENTS);
</script>

<svelte:head>
  <title>Hahnheim eSports - Retro LAN Party - TERMINE</title>
</svelte:head>

<section>
  {#if $appointments.loading}
    <div class="innerContainer">
      <LOADER />
    </div>
  {:else if $appointments.error}
    <p>Ein Fehler ist aufgetreten: {$appointments.error.message}</p>
  {:else if $appointments.data}
    <h1>Unsere Termine für 2022</h1>
    <div class="spacer" />
    <div class="grid grid-cols-5 gap-5 mx-auto max-w-5xl">
      <div class="col-span-5 sm:col-span-2">
        {#each $appointments.data['appointments'] as { name, description, date, pastEvent }}
          <div class="appointmentContainer">
            <h3 class={!pastEvent ? 'futurDate' : ''}><Time timestamp={date} format="DD.MM.YYYY" /></h3>
            {#if name}<p class="appointmentName">{name}</p>{/if}
            {#if description}<p class="appointmentDescription">{description}</p>{/if}
          </div>
        {/each}
      </div>
      <div class="order-first sm:order-last col-span-5 sm:col-span-3 flex justify-end items-center pb-8 sm:pb-0">
        <img src="https://media.graphassets.com/qxgnZYoAR6wuw6OAyZdU" alt="Termine" class="fluidImage" />
      </div>
    </div>
  {/if}
</section>

{#if $appointments.loading}
  <CONTACTWIDGET />
{/if}

<style lang="postcss">
  .appointmentContainer {
    padding-bottom: 2rem;
    h3 {
      padding: 0;
      &.futurDate {
        color: var(--grey);
      }
    }
    p {
      padding: 0;
      font-size: 1.25rem;

      &.appointmentName {
        padding: 0.25rem 0;
      }
    }
  }

  img.fluidImage {
    width: 100%;
    max-width: 580px;
    height: auto;
  }
</style>
