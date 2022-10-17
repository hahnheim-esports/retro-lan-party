<script lang="js">
  import { SplideShaderCarousel, maskShader } from '@splidejs/splide-shader-carousel';
  import waveMask from '../../assets/wave01.jpg';
  import '@splidejs/splide/css';

  import { onMount } from 'svelte';
  onMount(async () => {
    const splide = new SplideShaderCarousel('.splide', maskShader, {
      type: 'fade',
      speed: 1000,
      height: 700,
      rewind: true,
      continuous: true,
      waveMask,
      material: {
        intensity: 0.5,
        uvOffset: [1.0, 1.0]
      }
    });

    splide
      .mountAsync()
      .then(() => {
        console.log('The carousel is ready');
        document.body.hidden = false;
      })
      .catch(console.error);
  });
</script>

<section class="splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="slide1.webp" alt="" />
      </li>
      <li class="splide__slide">
        <img src="slide2.webp" alt="" />
      </li>
      <li class="splide__slide">
        <img src="slide3.webp" alt="" />
      </li>
      <li class="splide__slide">
        <img src="slide4.webp" alt="" />
      </li>
      <li class="splide__slide">
        <img src="slide5.webp" alt="" />
      </li>
    </ul>
  </div>
</section>
