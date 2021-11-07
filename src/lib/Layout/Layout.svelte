<script>
  import Header from "./Header.svelte";
  import Card from "./Cards/Card.svelte";
  import CardAction from "./Cards/CardAction.svelte";
  import CardContainer from "./Cards/CardContainer.svelte";
  import DataExample from "./Cards/DataExample.svelte";
  import BarChart from "./Cards/BarChart.svelte";
  import PieChart from "./Cards/PieChart.svelte";

  import {Link} from 'svelte-routing';
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
      <form action="" method="POST">
        <label for="first">First Name</label>
        <input type="text" name="first" />
        
        <label for="first">Last Name</label>
        <input type="text" name="last" />
        <input type="submit" />
      </form>
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
  form {
    display: flex;
    max-width: 400px;
    margin: 0 auto;
    flex-direction: column;
  }
  input {
    border-radius: 10px;
    appearance: none;
    border: none;
    outline: none;
    padding: 0.6rem;
    margin: 10px 0 35px 0;
    background-color: snow;
  }
  input[type="submit"] {
    background-color: #688EFF;
    color: white;
    font-weight: bold;
    padding: 13px 0;
    max-width: 50%;
    margin-top: -10px;
  }
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
