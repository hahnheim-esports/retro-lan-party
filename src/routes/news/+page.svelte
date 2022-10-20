<script lang="ts">
  import { myclient } from '$lib/graphql-client';
  import { setClient, query } from 'svelte-apollo';
  import { GET_NEWS } from '../../queries';
  import Time from 'svelte-time';
  import LOADER from '../../components/loader.svelte';
  import CAROUSEL from '../../components/carousel.svelte';

  setClient(myclient);
  const news = query(GET_NEWS);
</script>

<svelte:head>
  <title>Hahnheim eSports - Retro LAN Party - NEWS</title>
</svelte:head>

<CAROUSEL />

<section>
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
            <p class="date">Veröffentlicht am <Time timestamp={entry.published} format="DD.MM.YYYY" /></p>
            {#if entry.copy}<p>{entry.copy}</p>{/if}
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
  .newsContainer {
    @apply flex flex-col;

    .newsEntry {
      @apply py-10 grid grid-cols-2 gap-4 sm:gap-10;
      border-top: 1px solid var(--grey);

      .newsContent {
        @apply col-span-2 sm:col-span-1;
      }
      .newsImage {
        @apply order-first sm:order-last col-span-2 sm:col-span-1;
      }

      h3,
      p {
        padding: 0;
      }

      .date {
        font-size: 1rem;
        color: var(--dark-grey);
        padding: 0.25rem 0 1.25rem 0;
      }
    }
  }
</style>
