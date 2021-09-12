<script>
  let randomHeight = Math.floor(Math.random() * 800);
  
  setInterval(() => {
    randomHeight = Math.floor(Math.random() * 800);
  }, 4000);
</script>

<div class="box" style="height: {randomHeight}px" />

<style>
  .box {
    background-color: coral;
    width: 140px;
    margin: 0 2rem;

    transition: height 0.25s linear;;
}
</style>
