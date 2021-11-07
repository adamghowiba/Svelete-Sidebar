<script lang="ts">
  import Hamburger from "./Hamburger.svelte";
  import { sidebarCollapsed } from "../../../src/stores";
  import { onDestroy, onMount } from "svelte";

  // TODO Can't this just be a global function of some sorts.
  let mobileLayout: boolean;
  let mediaQuery = window.matchMedia("(max-width: 1000px)");

  function toggleNavbar() {
    const isHidden = $sidebarCollapsed.hidden;

    $sidebarCollapsed.hidden = !isHidden;
  }

  function layoutChangeHandler() {
    mobileLayout = !mobileLayout;
  }

  onMount(() => {
    if (mediaQuery.matches) {
      mobileLayout = true;
    }
    mediaQuery.addEventListener("change", layoutChangeHandler);
  });

  onDestroy(() => {
    mediaQuery.removeEventListener("change", layoutChangeHandler);
  });
</script>

<nav>
  {#if mobileLayout}
    <Hamburger on:click={toggleNavbar} />
  {:else}
    <img class="logo" src="/webrevived-logo.png" alt="Webrevived Logo" />
  {/if}
  <div class="nav-items">
    <img src="../../public/icon/notifications.svg" alt="" />
    <img src="../../public/icon/search.svg" alt="" />
    <img class="avatar" src="../../public/avatar.jpg" alt="" />
  </div>
</nav>

<style>
  nav {
    grid-area: topbar;
    width: 100%;
    height: 100%;
    padding: 1.5rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #222b36;
    position: relative;

    border-bottom: 1px solid #3d4752;
  }
  .nav-items {
    display: flex;
    align-items: center;
  }
  .nav-items img:not(:first-of-type, :last-of-type) {
    margin: 0 20px;
  }
  .avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
  .logo {
    max-width: 40px;
    display: block;
  }
</style>
