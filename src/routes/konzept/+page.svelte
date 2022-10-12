<script lang="ts">
  import { onMount } from 'svelte';
  import axios from 'axios';
  import showdown from 'showdown';

  let converter = new showdown.Converter();
  function convertMarkDown(input) {
    return converter.makeHtml(input);
  }

  let contentSnippets;
  onMount(async () => {
    const res = await axios.get('/api/content/konzept');
    contentSnippets = (await res.data) as Array<Object>;
  });
</script>

<svelte:head>
  <title>Hahnheim eSports - Retro LAN Party - KONZEPT</title>
</svelte:head>
<section class="max-w-6xl mx-auto py-10">
  {#if contentSnippets}
    {#each contentSnippets as { headline, content }}
      <h1 class="pb-6">{headline}</h1>
      <div class="spacer"></div>
      <div class="markupContent">{@html convertMarkDown(content)}</div>
    {/each}
  {/if}
</section>
