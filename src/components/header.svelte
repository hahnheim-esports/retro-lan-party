<script>
  import { page } from '$app/stores';
</script>

<header>
  <section>
    <div class="logoArea"><a href="/"><img src="esports-logo.webp" alt="Retro LAN Party" /></a></div>
    <nav>
      <ul>
        <li>
          <a href="/news" class={$page.routeId === 'news' ? 'active' : ''}>News</a>
        </li>
        <li>
          <a href="/termine" class={$page.routeId === 'termine' ? 'active' : ''}>Termine</a>
        </li>
        <li>
          <a href="/team" class={$page.routeId === 'team' ? 'active' : ''}>Team</a>
        </li>
        <li>
          <a href="/konzept" class={$page.routeId === 'konzept' ? 'active' : ''}>Konzept</a>
        </li>
      </ul>
    </nav>
  </section>
</header>

<style lang="postcss">
  header {
    @apply sticky top-0;
    background-color: var(--primary);
    width: 100%;
    height: 80px;
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
    z-index: 9999;

    section {
      @apply max-w-7xl mx-auto px-4 md:px-6;
      height: 100%;

      .logoArea {
        height: 80px;
        width: 80px;
        padding: 0.75rem;
        position: absolute;
        img {
          max-width: 56px;
          max-height: 56px;
        }
      }
      nav {
        @apply container mx-auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;

        @media (min-width: 640px) {
          justify-content: center;
        }

        ul {
          list-style-type: none;

          > li {
            display: inline-block;

            > a {
              color: white;
              font-size: 14px;
              padding: 0.25rem;
              margin: 0.5rem 0.3rem;
              transition: all 0.3s ease;
              border-bottom: 3px solid transparent;

              @media (min-width: 640px) {
                font-size: 17px;
                margin: 0.5rem 1.25rem;
              }

              &:hover,
              &.active {
                border-bottom: 2px solid white;
              }
            }
          }
        }
      }
    }
  }
</style>
