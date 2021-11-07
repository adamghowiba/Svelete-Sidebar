<script>
  import { sidebarCollapsed } from "../../../src/stores";
</script>

<div class="wrapper" on:click>
  <span class="line-1" />
  <span class="line-2" />
  <span class="line-3" />
</div>

<style>
  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: white;
  }
  div {
    height: 100%;
    max-height: 20px;
    width: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
