<div class="container">
  <slot />
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;

}

@media screen and (max-width: 800px) {
    .container {
        max-width: 100%;
        flex-basis: 100%;
        flex-wrap: wrap;
    }
  }
</style>
