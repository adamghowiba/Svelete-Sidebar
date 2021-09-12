<script>
  export let title = "Title";
</script>

<div class="group">
  <h4 class="group__title">{title}</h4>

  <div class="group__items">
    <slot />
  </div>
</div>

<style>
  .group {
    display: flex;
    gap: 1.4rem;
    flex-direction: column;
  }
  .group__items {
      color: #919EAB;
      font-weight: 600;
      margin-left: 0.2rem;

      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      position: relative;
  }
  .group__title {
    text-transform: uppercase;
  }
</style>
