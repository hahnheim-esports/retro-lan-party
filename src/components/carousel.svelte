<script context="module">
  // import Carousel from 'svelte-carousel';
</script>

<script>
  let carousel; // for calling methods of the carousel instance
  const handleNextClick = () => {
    carousel.goToNext();
  };
</script>

<!--
<Carousel bind:this={carousel}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</Carousel>

<button on:click={handleNextClick}>Next</button>
-->
