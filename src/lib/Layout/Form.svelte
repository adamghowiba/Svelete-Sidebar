<script lang="ts">
  import Card from "./Cards/Card.svelte";
  import CardAction from "./Cards/CardAction.svelte";
  import CardContainer from "./Cards/CardContainer.svelte";
  export const url = "clients";
  import { name, phone, internet } from "faker";
  import { onMount } from "svelte";

  let data = [];

  for (let x = 0; x < 25; x++) {
    data.push({
      name: name.findName(),
      phone: phone.phoneNumber(),
      email: internet.email(),
      type: "Cancled",
    });
  }

  function nextButton() {
    start = end;
    end += Number(rowsPerPage);
  }
  function backButton() {
    start = start - Number(rowsPerPage);
    end = end - Number(rowsPerPage);
  }

  let rowsPerPage = 10;
  $: start = 0;
  $: end = Number(rowsPerPage);
</script>

<!-- data table -->
<Card>
  <table>
    <thead>
      <tr>
        <th><div>Name</div></th>
        <th><div>Email</div></th>
        <th><div>Phone</div></th>
        <th><div>Type</div></th>
      </tr>
    </thead>

    <tbody>
      {#each data.slice(start, end) as data}
        <!-- <div class="data"> -->
        <tr class="tr">
          <td><div>{data.name}</div></td>
          <td><div>{data.phone}</div></td>
          <td><div>{data.email}</div></td>
          <td><div>{data.type}</div></td>
        </tr>
        <!-- </div> -->
      {/each}
    </tbody>
  </table>
  <form class="footer" on:submit|preventDefault>
    <select bind:value={rowsPerPage}>
      <option value=10>10</option>
      <option value=15>15</option>
      <option value=25>25</option>
    </select>
    <span>{start} - {data.length}</span>
    <button on:click={backButton} disabled={start == 0} class="arrow-right"
      >Back</button
    >
    <button
      on:click={nextButton}
      disabled={end >= data.length}
      class="arrow-left">Next</button
    >
  </form>
</Card>

<style>
  .footer {
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: end;
    gap: 2rem;
    padding-right: 50px;
  }
  button {
    padding: 15px;
  }
  th {
    /* background-color: rgb(255, 255, 255, 0.8); */
    /* color: black; */
    padding: 15px;
    text-align: left;
  }
  div {
    display: inline-flex;
    width: 50%;
  }
  td {
    color: white;
    padding: 25px 15px;
    border-bottom: 1px solid rgba(211, 211, 211, 0.356);
  }
  td:is(:first-child),
  th:is(:first-child) {
    padding-left: 0px;
  }
  td:is(:first-child) {
    color: #56e8ff;
  }

  table {
    min-width: 100%;
    width: 100%;
    table-layout: auto;
    border-collapse: collapse;
  }
</style>
