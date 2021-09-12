<script>
  export let src = "/icon/data-sheet.svg";
  export let title;
</script>

<div class="item">
  <img {src} alt="Item icon" />
  <span>{title}</span>
</div>

<style>
  .item {
    display: flex;
    justify-content: start;
    gap: 1rem;
    align-items: center;

    padding: 15px 15px;
    border-radius: 15px;

    transition: background-color 0.25s ease;
    cursor: pointer;
  }
  img {
    max-width: 19px;
  }
  .item:hover {
      background-color: rgba(104, 142, 255, 0.08);
  }
</style>
