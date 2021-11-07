<script lang="ts">
  import SidebarGroup from "./SidebarGroup.svelte";
  import SidebarItem from "./SidebarItem.svelte";
  import ProfileCard from "./ProfileCard.svelte";
  import SidebarExpand from "./SidebarExpand.svelte";
  import { sidebarCollapsed, sidebarHidden } from "../../stores";
  import { onDestroy, onMount } from "svelte";

  let sideBarElement: HTMLElement;
  const mobileQuery = window.matchMedia("(max-width: 600px");

  function mobileQueryHandler() {
    $sidebarCollapsed.hidden = mobileQuery.matches;
  }

  function hideSidebar(hide: boolean) {
    if (!sideBarElement) {
      console.log("Element not loaded.");
      return;
    }
    const sidebarWidth = sideBarElement.offsetWidth + 2;

    // Trasnform sidebar out of view.
    sideBarElement.style.transform = `translateX(${
      hide ? -sidebarWidth : "0"
    }px)`;
  }

  function toggleCollapsed() {
    $sidebarCollapsed.collapsed = !$sidebarCollapsed.collapsed;
  }

  onMount(() => {
  if (mobileQuery.matches) $sidebarCollapsed.hidden = true;
    mobileQuery.addEventListener("change", mobileQueryHandler);
  });

  onDestroy(() => {
    mobileQuery.removeEventListener("change", mobileQueryHandler);
  });

  $: hideSidebar($sidebarCollapsed.hidden);
  $: $sidebarCollapsed, console.log($sidebarCollapsed.hidden)
</script>

<div
  class="sidebar {$sidebarCollapsed.collapsed && 'sidebar-collapsed'}"
  bind:this={sideBarElement}
>
  <!-- Sidebar Head -->
  {#if !$sidebarCollapsed.collapsed}
    <div class="sidebar__head">
      <!-- <img class="logo" src="/webrevived-logo.png" alt="Webrevived Logo" /> -->
      <ProfileCard />
    </div>

    <div class="hr" />
  {/if}

  <div class="sidebar__items">
    <!-- Sidebar Item Group -->
    <SidebarGroup title="Mangement">
      <SidebarItem path="/" title="Home" src="icon/user.svg" />
      <SidebarItem path="/clients" title="Clients" src="icon/user.svg" />
      <SidebarItem path="/forms" title="Forms" src="icon/data-sheet.svg" />
    </SidebarGroup>

    <!-- Sidebar Item Group -->
    <SidebarGroup title="General">
      <SidebarItem
        path="/overview"
        title="Overview"
        src="/icon/data-sheet.svg"
      />

      <SidebarItem
        path="/analytics"
        title="Analytics"
        src="/icon/chart-pie.svg"
      />
      <SidebarItem title="Account" src="icon/user.svg" />
    </SidebarGroup>

    <!-- Sidebar Item Group -->
    <SidebarGroup title="Account">
      <SidebarExpand title="Expand">
        <h4 class="expand__item">General</h4>
        <h4 class="expand__item">General</h4>
        <h4 class="expand__item">General</h4>
      </SidebarExpand>

      <SidebarExpand title="Expand">
        <h4 class="expand__item">General</h4>
        <h4 class="expand__item">General</h4>
        <h4 class="expand__item">General</h4>
      </SidebarExpand>

      <SidebarExpand title="Expand">
        <h4 class="expand__item">9</h4>
        <h4 class="expand__item">8</h4>
        <h4 class="expand__item">7</h4>
        <h4 class="expand__item">6</h4>
        <h4 class="expand__item">5</h4>
        <h4 class="expand__item">4</h4>
      </SidebarExpand>
    </SidebarGroup>
  </div>

  <div class="sidebar-expand" on:click={toggleCollapsed} />
</div>

<style>
  .sidebar {
    display: block;
    width: 300px;
    height: 100%;
    background-color: #222b36;
    position: relative;
    z-index: 10;

    padding: 2rem 1rem;
    color: white;
    overflow-y: auto;

    grid-area: sidebar;
    transition: transform 0.25s ease-out;
  }
  .sidebar-closed {
    transform: translateX(-101%);
    border: 1px solid red;
  }
  /* .sidebar-closed {
    position: absolute;
    border: 2px solid red;
    left: 0;
    top: 0;
    bottom: 0;
  } */
  .sidebar-collapsed {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0.8rem;
  }
  .sidebar-expand {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(165, 165, 165);
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
  .sidebar__items {
    display: flex;
    flex-direction: column;
    /* gap: 2.5rem; */
  }
  .expand__item {
    margin: 0.5rem 0;
  }
  .logo {
    max-width: 50px;
    margin: 0 auto;
    display: block;

    margin-bottom: 1rem;
  }
  .hr {
    height: 10px;
    margin: 1rem 0;
  }
  .hr::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #3d4752;

    left: 0;
  }

  @media screen and (max-width: 1200px) {
    .sidebar {
      position: absolute;
    }
  }
</style>
