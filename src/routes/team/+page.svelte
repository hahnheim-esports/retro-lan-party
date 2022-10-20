<script lang="ts">
  import { myclient } from '$lib/graphql-client';
  import { setClient, query } from 'svelte-apollo';
  import { GET_TEAM } from '../../queries';
  import LOADER from '../../components/loader.svelte';
  import showdown from 'showdown';

  setClient(myclient);
  const team = query(GET_TEAM);

  let converter = new showdown.Converter();
  function convertMarkDown(input) {
    return converter.makeHtml(input);
  }
</script>

<svelte:head>
  <title>Hahnheim eSports - Retro LAN Party - TEAM</title>
</svelte:head>

<section>
  {#if $team.loading}
    <div class="innerContainer">
      <LOADER />
    </div>
  {:else if $team.error}
    <p>Ein Fehler ist aufgetreten: {$team.error.message}</p>
  {:else if $team.data}
    <h1>Unser Team</h1>
    <div class="spacer" />
    <div class="memberContainer ">
      {#each $team.data['teamMembers'] as member}
        <div class="memberEntry">
          {#if member.image}
            <div class="memberImage">
              <img src={member.image.url} alt={member.image.caption} />
              {#if member.image.caption}
                <div class="caption">{member.image.caption}</div>
              {/if}
            </div>
          {/if}
          <div class="newsContent">
            <h3>{member.name}</h3>
            {#if member.description}
              <p>{@html convertMarkDown(member.description)}</p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>

<style lang="postcss">
  .memberContainer {
    @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10;

    .memberEntry {
      @apply flex flex-col;

      .memberImage {
        @apply pb-6;
        img {
          max-width: 290px;
          border: 1px solid var(--grey);
        }
      }
    }
  }
</style>
