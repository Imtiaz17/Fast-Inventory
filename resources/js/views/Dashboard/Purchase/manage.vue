<template>
  <div class="main-content">
    <div class="page-header">
      <h4 class="page-title">Purchases</h4>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-10 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="section-semi-title">All Purchases</h5>
            <div id="people">
              <v-client-table :data="tableData" :columns="columns" :options="options">
              <template slot="actions" slot-scope="{tableData}">
                 <div class="btn-group" role="group">
                      <v-dropdown :show-arrow="false" theme-light>
                        <button
                          id="btnGroupDrop1"
                          slot="activator"
                          type="button"
                          class="btn btn-outline-default dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <v-dropdown-item>
                          <a class="dropdown-item" href="#">
                            Dropdown link
                          </a>
                        </v-dropdown-item>
                        <v-dropdown-item>
                          <a class="dropdown-item" href="#">
                            Dropdown link
                          </a>
                        </v-dropdown-item>
                      </v-dropdown>
                    </div>
              </template>
          </v-client-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { ServerTable, ClientTable, Event } from 'vue-tables-2';
Vue.use(ClientTable);
export default {
  data() {
    return {
      columns: ['date', 'refno', 'supplier', 'purchase_status', 'total', 'paid', 'due', 'payment_st', 'actions'],
      tableData: [
        { date: '12/2/2020', refno: "746", supplier: "Abc", purchase_status: "Active", total: '535', paid: '300', due: '100', payment_st: 'active' },

      ],
      options: {
        perPage: 2,
        perPageValues: [2],
        headings: {
          date: 'Date',
          refno: 'Ref No',
          supplier: 'Supplier',
          purchase_status: 'Purchase Status',
          total: 'Total',
          paid: 'Paid',
          payment_st: 'Payment Status',
          action: "Action"
        },
        editableColumns: ['refno'],
        sortable: ['refno'],
        filterable: ['refno']
      }
    }
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
  watch: {

  }
};

</script>
<style scoped>
.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VuePagination {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}

[v-cloak] {
  display: none;
}

</style>
