<script>
  import Button from "../Global/Button.svelte";

  export let name;
</script>

<div class="header">
  <div class="content">
    <span class="header__caption">Overview</span>
    <h1>Good morning, <span class="cap">{name}</span></h1>
    <p>Here's what's happening with your projects today</p>
  </div>
  <Button>View Notifcations</Button>
</div>

<style>
  .header {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    margin-bottom: 2rem;

    flex-basis: 100%;
  }

  .header__caption {
    font-size: 12px;
    color: #919eab;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
    display: block;
  }
  h1 {
    font-size: 24px;
    margin-bottom: 0.2em;
  }
  p {
    font-size: 14px;
    color: #919eab;
  }
  /* Util Styles */
  .cap {
    text-transform: capitalize;
  }
</style>
