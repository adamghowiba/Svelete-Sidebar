<script>
  import { Link } from "svelte-routing";
  import { sidebarCollapsed } from "../../stores";
  export let src = "/icon/data-sheet.svg";
  export let title;
  export let path = "/";
</script>

<a href={path}>
  <div class="item {$sidebarCollapsed.collapsed ? 'item-collapsed' : null}">
    <img {src} alt="Item icon" />
    {#if !$sidebarCollapsed.collapsed}
      <span>{title}</span>
    {/if}
  </div>
</a>

<style>
  .item {
    display: flex;
    justify-content: start;
    align-items: center;

    padding: 15px 15px;
    border-radius: 15px;

    transition: background-color 0.25s ease;
    cursor: pointer;
  }
  .item-collapsed {
    padding: 15px 15px;
  }
  img {
    max-width: 19px;
  }
  span {
    margin-left: 1rem;
  }
  .item:hover {
    background-color: rgba(104, 142, 255, 0.08);
  }
</style>
