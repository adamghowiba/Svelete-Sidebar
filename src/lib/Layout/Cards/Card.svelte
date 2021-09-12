<script>
  export let width = 'auto';
</script>

<div class="card" style="width: {width}%">
  <div class="card__body">
    <slot />
  </div>

  {#if $$slots.action}
    <div class="card__action">
      <slot name="action" />
    </div>
  {/if}
</div>

<style>
  .card {
    width: 100%;
    border-radius: 12px;
    background-color: #222b36;
    min-width: 150px;
    height: auto;
    /* background-color: var(--color); */
  }
  .card__body {
    padding: 2rem 1.5rem;
  }
  .card__action {
  }

  @media screen and (max-width: 800px) {
    .card {
      max-width: 100%;
      flex-basis: 100%;
    }
  }
</style>
