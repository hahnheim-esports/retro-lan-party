<script>
  import '../app.postcss';
  import HEADER from '../components/header.svelte';
  import FOOTER from '../components/footer.svelte';
</script>

<HEADER />

<div class="mainContentContainer">
  <slot />
</div>

<FOOTER />

<style lang="postcss">
  .mainContentContainer {
    min-height: calc(100vh - 260px);
  }
</style>
