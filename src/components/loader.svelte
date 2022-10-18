<div class="loader-dual-ring" />

<style lang="postcss">
  .loader-dual-ring {
    display: inline-block;
    width: 110px;
    height: 110px;
    &:after {
      content: '';
      display: block;
      width: 88px;
      height: 88px;
      margin: 12px;
      border-radius: 50%;
      border: 10px solid var(--primary);
      border-color: var(--primary) transparent var(--primary) transparent;
      animation: dual-ring-spin 1.2s linear infinite;
    }
  }
  @keyframes dual-ring-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
