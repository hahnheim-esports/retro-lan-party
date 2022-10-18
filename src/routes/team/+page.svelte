<script lang="ts">
  import { myclient } from '$lib/graphql-client';
  import { setClient, query } from 'svelte-apollo';
  import { GET_TEAM } from '../../queries';
  import LOADER from '../../components/loader.svelte';

  setClient(myclient);
  const team = query(GET_TEAM);
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
            <p>{member.description}</p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>

<style lang="postcss">
  .memberContainer {
    @apply grid grid-cols-4 gap-10;

    .memberEntry {
      @apply py-10 flex flex-col;
    }
  }
</style>
