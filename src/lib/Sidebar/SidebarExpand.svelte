<script lang="ts">
  import { onMount } from "svelte";
  export let src = "/icon/data-sheet.svg";
  export let title = "List";

  let expand = false;
  let height: string;
  let elementHeight: number;

  onMount(() => {
    //Set the expanded cards to default to being unfolded.
    const wrapper = document.querySelectorAll(".expand__items");
    
    wrapper.forEach((elem: HTMLElement) => {
      elem.style.height = "0px";
    })

  });

  function expandDropdown(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const wrapper = target.querySelector(".expand__items") as HTMLElement;
    
    if (expand) {
      wrapper.style.height = `0px`;
      expand = false;
      return;
    }

    expand = true;
    wrapper.style.height = `${wrapper.scrollHeight}px`;
  }
</script>

<div class="expand-wrap">
  <div class="expand" on:click={expandDropdown}>
    <div class="mask">
      <img {src} alt="Item icon" />
      <span>{title}</span>

      <img class="down-arrow" src="/icon/down.svg" alt="Item icon" />
    </div>

    <div class="expand__items">
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
    gap: 1rem;
    /* align-items: center; */
    width: 100%;
    min-height: 0;

    cursor: pointer;
  }
  .expand__items {
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: height 0.25s ease;
  }

  .mask:hover {
    background-color: rgba(104, 142, 255, 0.08);
  }
  img {
    max-width: 19px;
  }
  .down-arrow {
    margin-left: auto;
  }
</style>
