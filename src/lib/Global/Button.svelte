<script>
  export let maxSize = 200;
</script>

<a href="/" style="max-width: {maxSize}px;"><slot /></a>

<style>
  a {
    display: block;
    color: white;
    background-color: #688eff;
    padding: 0.7rem 1.5rem;
    border-radius: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: max-content;

  }
</style>
