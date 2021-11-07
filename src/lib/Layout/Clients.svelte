<script lang="ts">
  import Button from "../Global/Button.svelte";
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Pagination,
  } from "@smui/data-table";
  import Select, { Option } from "@smui/select";
  import IconButton from "@smui/icon-button";
  import { Label } from "@smui/common";
  import Checkbox from "@smui/checkbox";
  import { name, phone, internet } from "faker";

  import { Link } from "svelte-routing";

  interface Data {
    name: string;
    phone: number | string;
    email: string;
    type: "Active" | "Cancled";
  }

  let DATA: Data[] = [
    {
      name: "Adam Ware",
      phone: "407-421-5403",
      email: "adam@test.com",
      type: "Cancled",
    },
  ];

  for (let x = 0; x < 50; x++) {
    DATA.push({
      name: name.findName(),
      phone: phone.phoneNumber(),
      email: internet.email(),
      type: "Cancled",
    });
  }

  let rowsPerPage = 10;
  let currentPage = 0;
  let selected = [];

  $: start = currentPage * rowsPerPage;
  $: end = Math.min(start + rowsPerPage, DATA.length);

  $: slice = DATA.slice(start, end);
  $: lastPage = Math.max(Math.ceil(DATA.length / rowsPerPage) - 1, 0);

  $: if (currentPage > lastPage) {
    currentPage = lastPage;
  }
</script>

<div class="flex">
  <h1>Customer List</h1>
  <Button>Add Client</Button>
</div>
<DataTable style="width: 100%; row-span: 1/2; ">
  <!-- Head -->
  <Head>
    <!-- Heading Rows -->
    <Row>
      <Cell checkbox>
        <Checkbox />
      </Cell>
      <Cell>Name</Cell>
      <Cell>Phone</Cell>
      <Cell>Email</Cell>
      <Cell>Type</Cell>
    </Row>
  </Head>

  <!-- Body -->
  <Body>
    {#each slice as data}
    <a href="/user/{data.name}" style="position: absolute; width: 100%; height: 100%;">
    </a>
      <Row style="poisition: relative;">
          <Cell checkbox>
            <Checkbox bind:group={selected} value={data} valueKey={data.name} />
          </Cell>
          <Cell style="padding-top: 40px; padding-bottom: 40px;">{data.name}</Cell>
          <Cell>{data.email}</Cell>
          <Cell>{data.phone}</Cell>
          <Cell>{data.type}</Cell>
      </Row>
    {/each}
  </Body>

  <Pagination slot="paginate">
    <svelte:fragment slot="rowsPerPage">
      <Label>Rows Per Page</Label>
      <Select variant="outlined" bind:value={rowsPerPage} noLabel>
        <Option value={10}>10</Option>
        <Option value={25}>25</Option>
        <Option value={100}>100</Option>
      </Select>
    </svelte:fragment>
    <svelte:fragment slot="total">
      {start + 1}-{end} of {DATA.length}
    </svelte:fragment>

    <IconButton
      class="material-icons"
      action="first-page"
      title="First page"
      color="secondary"
      on:click={() => (currentPage = 0)}
      disabled={currentPage === 0}>first_page</IconButton
    >
    <IconButton
      class="material-icons"
      action="prev-page"
      title="Prev page"
      on:click={() => currentPage--}
      disabled={currentPage === 0}>chevron_left</IconButton
    >
    <IconButton
      class="material-icons"
      action="next-page"
      title="Next page"
      on:click={() => currentPage++}
      disabled={currentPage === lastPage}>chevron_right</IconButton
    >
    <IconButton
      class="material-icons"
      action="last-page"
      title="Last page"
      on:click={() => (currentPage = lastPage)}
      disabled={currentPage === lastPage}>last_page</IconButton
    >
  </Pagination>
</DataTable>

<style>
  .flex {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    align-items: center;
  }
</style>
