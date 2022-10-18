<script lang="ts">
  import { myclient } from '$lib/graphql-client';
  import { setClient, query } from 'svelte-apollo';
  import { GET_CONTENT_PRIVACY } from '../../queries';
  import showdown from 'showdown';
  import LOADER from '../../components/loader.svelte';

  setClient(myclient);
  const contentSnippets = query(GET_CONTENT_PRIVACY);

  let converter = new showdown.Converter();
  function convertMarkDown(input) {
    return converter.makeHtml(input);
  }
</script>

<svelte:head>
  <title>Hahnheim eSports - Retro LAN Party - DATENSCHUTZ</title>
</svelte:head>

<section>
  {#if $contentSnippets.loading}
    <div class="innerContainer">
      <LOADER />
    </div>
  {:else if $contentSnippets.error}
    <p>Ein Fehler ist aufgetreten: {$contentSnippets.error.message}</p>
  {:else if $contentSnippets.data}
    <div class="contentContainer ">
      {#each $contentSnippets.data['contentSnippets'] as snippet}
        <h1>{snippet.headline}</h1>
        <div class="spacer" />
        <div class="markupContent">{@html convertMarkDown(snippet.content)}</div>
      {/each}
    </div>
  {/if}
</section>
