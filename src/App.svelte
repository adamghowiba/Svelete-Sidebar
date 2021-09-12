<script lang="ts">
  import Sidebar from "./lib/Sidebar/Sidebar.svelte";
  import Layout from "./lib/Layout/Layout.svelte";
  import './styles/global.css';
</script>

<main class="grid">
<Sidebar />

<!-- Keep it up to comps... -->
<div class="layout">
  <Layout />
</div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100%;
  }
  .layout {
    overflow-y: auto;
    height: auto;
    background-color: #171c24;
  }

</style>
