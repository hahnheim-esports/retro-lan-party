<div class="loader-dual-ring"></div>

<style lang="postcss">
  .loader-dual-ring {
    display: inline-block;
    opacity: 0.9;
    width: 80px;
    height: 80px;
    &:after {
      content: '';
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #363acc;
      border-color: #363acc transparent #363acc transparent;
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
