<template>
  <v-container>
    <div>
      <v-data-table
       :headers="headers"
        :items="numbers"
        :pagination.sync="pagination"
       class="elevation-1"
      >

      <template 
          slot="items" 
          slot-scope="props"
      >
        <td class="text-xs-left">{{ props.item.index }}</td>
        <td class="text-xs-left">{{ props.item.phoneNumber }}</td>
      </template>
     </v-data-table>
   </div>
  </v-container>
</template>
<script>

export default {
  props: {
    numbers: Array
  },
  data: () => ({
        pagination: {
          rowsPerPage: 25,
        },
        headers: [
          { text: 'Index', value: "index" },
          { text: 'Phone Numbers', value: "phoneNumber" }
        ],
  }),
}
</script>
<style lang="stylus" scoped>
</style>
