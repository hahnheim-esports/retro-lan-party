<script lang="ts">
  import { myclient } from '$lib/graphql-client';
  import { setClient, query } from 'svelte-apollo';
  import { GET_NEWS } from '../../queries';
  import Time from 'svelte-time';
  import LOADER from '../../components/loader.svelte';
  // import SLIDER from '../../components/slider.svelte';
  // import CAROUSEL from '../../components/carousel.svelte';

  setClient(myclient);
  const news = query(GET_NEWS);
</script>

<svelte:head>
  <title>Hahnheim eSports - Retro LAN Party - NEWS</title>
</svelte:head>

<!-- <CAROUSEL /> -->

<section class="max-w-6xl mx-auto py-10">
  {#if $news.loading}
    <div class="innerContainer">
      <LOADER />
    </div>
  {:else if $news.error}
    <p>Ein Fehler ist aufgetreten: {$news.error.message}</p>
  {:else if $news.data}
    <h1>Die aktuellsten News</h1>
    <div class="newsContainer ">
      {#each $news.data['newsEntries'] as entry}
        <div class="newsEntry">
          <div class="newsContent">
            <h3>{entry.title}</h3>
            <p class="date"><Time timestamp={entry.published} format="DD.MM.YYYY - HH:mm" /></p>
            <p>{entry.copy}</p>
          </div>
          {#if entry.newsImages?.length}
            <div class="newsImage">
              <img src={entry.newsImages[0].url} alt={entry.newsImages[0].caption} />
              {#if entry.newsImages[0].caption}
                <div class="caption">{entry.newsImages[0].caption}</div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</section>

<style lang="postcss">
  .innerContainer {
    @apply flex justify-center items-center;
    min-height: calc(100vh - 340px);
  }
  .newsContainer {
    @apply flex flex-col;

    .newsEntry {
      @apply py-10 grid grid-cols-2 gap-10;

      .date {
        font-size: 1rem;
        opacity: 0.6;
      }
    }
  }
</style>
