<template>
  <div>
    <div class="flex flex-col gap-[50px]">
      <div class="text-5xl font-medium">История броней</div>
      <table
        class="w-full flex flex-row flex-nowrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5"
      >
        <thead class="text-white">
          <tr
            class="bg-background-secondary flex flex-wrap w-full justify-around sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
          >
            <th class="p-3 text-left">Name</th>
            <th class="p-3 text-left">Email</th>
            <th class="p-3 text-left" width="110px">Actions</th>
          </tr>
        </thead>
        <tbody class="flex-1 sm:flex-none w-full">
          <tr
            class="flex flex-row w-full text-center justify-around flex-nowrap sm:table-row mb-2 sm:mb-0"
          >
            <td
              class="border-border-gray border hover:bg-background-index p-3 w-full"
            >
              John Covv
            </td>
            <td
              class="border-border-gray border hover:bg-background-index p-3 w-full"
            >
              contato@johncovv.com
            </td>
            <td
              class="border-border-gray border hover:bg-background-index p-3 w-full text-red-100 hover:text-red-200 hover:font-medium cursor-pointer"
            >
              Delete
            </td>
          </tr>
          <tr
            class="flex flex-row w-full text-center justify-around flex-nowrap sm:table-row mb-2 sm:mb-0"
          >
            <td
              class="border-border-gray border hover:bg-background-index p-3 w-full"
            >
              John Covv
            </td>
            <td
              class="border-border-gray border hover:bg-background-index p-3 w-full"
            >
              contato@johncovv.com
            </td>
            <td
              class="border-border-gray border hover:bg-background-index p-3 w-full text-red-100 hover:text-red-200 hover:font-medium cursor-pointer"
            >
              Delete
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PavilionBookings',
  components: {},
  layout: 'cabinetLayout',
  data: () => ({}),
  auth: false,
})
</script>

<style lang="scss" scoped>
@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
</style>
