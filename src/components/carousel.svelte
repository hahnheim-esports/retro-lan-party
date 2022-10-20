<script>
  import { onMount } from 'svelte';

  let Carousel;
  onMount(async () => {
    const module = await import('svelte-carousel');
    Carousel = module.default;
  });

  const sliderItems = [
    {
      title: 'eSports Slider Image 01',
      url: 'https://media.graphassets.com/wnf1leIRFKh0GPrbSqMA'
    },
    {
      title: 'eSports Slider Image 02',
      url: 'https://media.graphassets.com/GnkkjphYQbmqRXyLg9xB'
    },
    {
      title: 'eSports Slider Image 03',
      url: 'https://media.graphassets.com/uNsZZd5kRtPj9LZ08afg'
    },
    {
      title: 'eSports Slider Image 04',
      url: 'https://media.graphassets.com/T4VGdaZzRjmm0ZfCTJFW'
    },
    {
      title: 'eSports Slider Image 05',
      url: 'https://media.graphassets.com/XahyeN4iQVuTF74C1Gjh'
    },
    {
      title: 'eSports Slider Image 06',
      url: 'https://media.graphassets.com/4HLzpuvtTyKIpW42gEMp'
    }
  ];
</script>

<div class="carouselContainer fade-in">
  <div class="carouselInner">
    <svelte:component this={Carousel} let:showPrevPage let:showNextPage autoplay="true">
      <button type="button" slot="prev" on:click={showPrevPage}><div class="icon leftArrow" /></button>
      {#each sliderItems as item}
        <div class="imageWrapper fade-in">
          <img src={item.url} alt={item.title} class="fade-in" />
        </div>
      {/each}
      <button type="button" slot="next" on:click={showNextPage}><div class="icon rightArrow" /></button>
    </svelte:component>
  </div>
</div>

<style lang="postcss">
  .carouselContainer {
    width: 100%;
    max-height: 825px;
    background: var(--secondary);
    padding: 0;
    --sc-color-rgb-light: #ffffff;

    @media (min-width: 640px) {
      padding: 50px 0 75px 0;
    }

    .carouselInner {
      @apply max-w-7xl mx-auto;
      max-height: 690px;

      .imageWrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          max-height: 690px;
          height: auto;
          width: auto;
        }
      }

      div.icon {
        width: 50px;
        height: 50px;

        &:hover {
          opacity: 0.75;
        }

        &.leftArrow {
          background-image: url(../lib/assets/left-arrow.svg);
        }
        &.rightArrow {
          background-image: url(../lib/assets/right-arrow.svg);
        }
      }
    }
  }
</style>
