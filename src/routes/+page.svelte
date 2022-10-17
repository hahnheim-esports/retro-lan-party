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

<section class="max-w-6xl mx-auto py-10">
  <div class="innerContainer">
    <LOADER />
  </div>
</section>

<style lang="postcss">
  .innerContainer {
    @apply flex justify-center items-center;
    min-height: calc(100vh - 340px);
  }
</style>
