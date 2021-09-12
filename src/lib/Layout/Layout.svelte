<script>
  import Header from "./Header.svelte";
  import Card from "./Cards/Card.svelte";
  import CardAction from "./Cards/CardAction.svelte";
  import CardContainer from "./Cards/CardContainer.svelte";
  import DataExample from "./Cards/DataExample.svelte";
  import BarChart from "./Cards/BarChart.svelte";
  import PieChart from "./Cards/PieChart.svelte";
</script>

<div class="layout">
  <!-- Header -->
  <Header name="adam" />

  <CardContainer>
    <Card>
      <DataExample />
      <CardAction slot="action" />
    </Card>

    <Card>
      <DataExample />
      <CardAction slot="action" />
    </Card>
  </CardContainer>

  <CardContainer>
    <Card>
      <BarChart />
    </Card>
    <Card width="50">
      <PieChart />
      </Card>
  </CardContainer>
</div>

<style>
  .layout {
    width: 100%;
    height: 100%;
    background-color: #171c24;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    color: white;

    padding: 0 1.5rem;
    padding-top: 5rem;
  }

</style>
