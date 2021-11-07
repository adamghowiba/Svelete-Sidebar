<script lang="ts">
  import Sidebar from "./lib/Sidebar/Sidebar.svelte";
  import Layout from "./lib/Layout/Layout.svelte";
  import "./styles/global.css";
  // import { Router, Route, links, link } from "svelte-routing";
  import Form from "./lib/Layout/Form.svelte";
  import DataExample from "./lib/Layout/Cards/DataExample.svelte";
  import { Router, Route } from "svelte-routing";
  import Clients from "./lib/Layout/Clients.svelte";
  import Navbar from "./lib/Navbar/Navbar.svelte";
  import { sidebarCollapsed } from "./stores";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
</svelte:head>

<main class="grid">
  <Navbar />

  <Sidebar />
  {#if !$sidebarCollapsed.hidden}
    <div class="overlay" on:click={() => ($sidebarCollapsed.hidden = true)} />
  {/if}

  <div class="layout">
      <Router>
        <Route path="/"><h1>Hello</h1></Route>
        <Route path="/overview"><Layout /></Route>
        <Route path="/forms"><Clients /></Route>
        <Route path="/clients"><Form /></Route>
      </Router>
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.301);
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  .grid {
    display: grid;
    grid-template-rows: 80px 1fr;
    grid-template-columns: auto 1fr;

    grid-template-areas:
      "topbar topbar"
      "sidebar main";
    height: 100%;
  }
  .layout {
    overflow-y: auto;
    height: auto;
    background-color: #171c24;
    padding: 3rem 1.5rem;
    grid-area: main;
    position: relative;

    color: white;
  }
  :global(h1) {
    font-size: 24px;
    margin-bottom: 0.2em;
  }
  :global(p) {
    font-size: 14px;
    color: #919eab;
  }

  @media screen and (min-width: 600px) {
    .overlay {
      display: none;
    }
  }
</style>
