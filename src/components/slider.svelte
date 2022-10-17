<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css/skyblue';

  function generateSlides(length = 6, sig = 0): Array<{ src: string; alt: string }> {
    return Array.from({ length }).map((_, index) => {
      index = sig || index;

      return {
        src: `slide${index}.webp`,
        alt: `Image ${index}`
      };
    });
  }

  const slides = generateSlides();
  const options = {
    rewind: true,
    gap: '1rem',
    autoplay: true,
    arrows: true,
    height: '15rem'
  };
</script>

<div class="outer">
  <div class="splideWrapper">
    <Splide {options} hasTrack={false} aria-labelledby="autoplay-example-heading">
      <div style="position: relative">
        <SplideTrack>
          {#each slides as slide}
            <SplideSlide>
              <img src={slide.src} alt={slide.alt} />
            </SplideSlide>
          {/each}
        </SplideTrack>
      </div>

      <div class="splide__progress">
        <div class="splide__progress__bar" />
      </div>

      <button class="splide__toggle">
        <span class="splide__toggle__play">Abspielen</span>
        <span class="splide__toggle__pause">Pausieren</span>
      </button>
    </Splide>
  </div>
</div>

<style lang="postcss">
  .outer {
    background-color: #696dff;
    padding: 2rem;
    margin-bottom: 2rem;

    .splideWrapper {
      margin: 0 auto;
      min-height: 500px;
      max-width: 1152px;

      .splide img {
        width: auto;
        max-height: 500px;
        height: auto;
      }
    }
  }
</style>
