<script lang="ts">
  import { onMount } from "svelte";
  import { loadBarChart, updateData } from "../../scripts/charts";

  let chartCanvas: HTMLCanvasElement;

  onMount(() => {
    const chart = loadBarChart(chartCanvas);
  });
</script>

<h3>Charts</h3>

<div class="wrap">
  <canvas bind:this={chartCanvas} id="chart" />
</div>

<style>
  .wrap {
    width: 100%;
  }
  h3 {
    margin-bottom: 1rem;
  }
</style>
