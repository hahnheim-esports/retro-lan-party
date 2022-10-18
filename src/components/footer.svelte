<script lang="ts">
  export let openCookieSettings = () => {};
</script>

<footer>
  <section>
    <a href="/impressum">Impressum</a>
    <a href="/datenschutz">Datenschutz</a>
    <a href={'#'} on:click={openCookieSettings}>Cookie-Einstellungen</a>
  </section>
</footer>

<style lang="postcss">
  footer {
    background-color: var(--primary);
    width: 100%;
    height: 175px;
    z-index: 9999;

    section {
      @apply max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-11;
      a {
        color: white;
        padding: 0 1.5rem 0 0;
      }
    }
  }
</style>
