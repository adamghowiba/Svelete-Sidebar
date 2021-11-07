<script>
  import { sidebarCollapsed } from "../../stores";

  export let title = "Title";
</script>

<div class="group">
  {#if !$sidebarCollapsed.collapsed}
  <h4 class="group__title">{title}</h4>
  {/if}
  <div class="group__items">
    <slot />
  </div>
</div>

<style>
  .group {
    display: flex;
    /* gap: 1.4rem; */
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .group__items {
    color: #919eab;
    font-weight: 600;
    margin-left: 0.2rem;

    display: flex;
    flex-direction: column;
    /* gap: 0.5rem; */
    position: relative;
    margin-bottom: 1.5rem;
  }
  .group__title {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
</style>
