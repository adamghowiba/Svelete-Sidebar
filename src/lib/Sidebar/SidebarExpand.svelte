<script lang="ts">
  import { onMount } from "svelte";
  export let src = "/icon/data-sheet.svg";
  import { sidebarCollapsed } from "../../stores";
  export let title = "List";

  let expand = false;
  let height: string;
  let elementHeight: number;
  let expandItems: HTMLElement;

  onMount(() => {
    //Set the expanded cards to default to being unfolded.
    expandItems.style.height = '0px';
  });

  function expandDropdown(event: Event) {
    const target = event.currentTarget as HTMLElement;

    if (expand) {
      expandItems.style.height = `0px`;
      expand = false;
      return;
    }

    expand = true;
    expandItems.style.height = `${expandItems.scrollHeight}px`;
  }
</script>

<div class="expand-wrap">
  <div class="expand" on:click={expandDropdown}>
    <div class="mask">
      <img {src} alt="Item icon" />
      {#if !$sidebarCollapsed.collapsed}
        <span>{title}</span>
      {/if}

      <img class="down-arrow" src="/icon/down.svg" alt="Item icon" />
    </div>

    <div class="expand__items" bind:this={expandItems}>
      <slot />
    </div>
  </div>

  <!-- <div class="expand__items-wrap"> -->
  <!-- </div> -->
</div>

<style>
  .expand {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    transition: background-color 0.25s ease;
  }
  .mask {
    padding: 15px;
    border-radius: 15px;

    display: flex;
    justify-content: start;
    flex-direction: row;
    /* align-items: center; */
    width: 100%;
    min-height: 0;

    cursor: pointer;
  }
  .expand__items {
    display: flex;
    padding-left: 50px;
    flex-direction: column;
    overflow: hidden;
    transition: height 0.25s ease;
  }
  .collapsed-items {
    padding-left: 0px;
    align-items: center;
  }

  .mask:hover {
    background-color: rgba(104, 142, 255, 0.08);
  }
  img {
    max-width: 19px;
    margin-right: 1rem;
  }
  .down-arrow {
    margin-left: auto;
  }
</style>
