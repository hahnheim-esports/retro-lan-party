<script lang="ts">
  import LOADER from '../components/loader.svelte';
  import { onMount } from 'svelte';

  onMount(async () => {
    location.href = '/news';
  });
</script>

<svelte:head>
  <title>Hahnheim eSports</title>
</svelte:head>

<section>
  <div class="innerContainer">
    <LOADER />
  </div>
</section>
