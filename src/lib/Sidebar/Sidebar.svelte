<script>
  import SidebarGroup from "./SidebarGroup.svelte";
  import SidebarItem from "./SidebarItem.svelte";
  import ProfileCard from "./ProfileCard.svelte";
  import SidebarExpand from "./SidebarExpand.svelte";
</script>

<div class="sidebar">
  <!-- Sidebar Head -->
  <div class="sidebar__head">
    <img class="logo" src="/webrevived-logo.png" alt="Webrevived Logo" />
    <ProfileCard />
  </div>

  <div class="hr" />

  <!-- Sidebar Items -->
  <div class="sidebar__items">
    <!-- SideBar Expand -->

    <!-- Sidebar Item Group -->
    <SidebarGroup title="General">
      <SidebarItem title="Overview" src="/icon/data-sheet.svg" />
      <div class="block"></div>
      <SidebarItem title="Analytics" src="/icon/chart-pie.svg" />
      <SidebarItem title="Finance" src="/icon/shopping-bag.svg" />
      <SidebarItem title="Account" src="icon/user.svg" />
    </SidebarGroup>

    <!-- Sidebar Item Group -->
    <SidebarGroup title="Management">
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

    <!-- Sidebar Item Group -->
    <SidebarGroup title="platforms">
      <SidebarItem title="Overview" />
      <SidebarItem title="Analytics" src="/icon/chart-pie.svg" />
      <SidebarItem title="Finance" src="/icon/shopping-bag.svg" />
      <SidebarItem title="Account" src="icon/user.svg" />
    </SidebarGroup>
  </div>
</div>

<style>
  .sidebar {
    display: block;
    height: 100%;
    width: 300px;
    background-color: #222b36;
    position: relative;

    padding: 2rem 1rem;
    color: white;
    overflow-y: auto;
  }
  .sidebar__items {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
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
    right: 0;
  }

  @media screen and (max-width: 1200px) {
    .sidebar {
      display: none;
    }
  }
</style>
