<template>
  <div class="main-content">
    <div class="page-header">
      <h4 class="page-title">Staffs List</h4>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-10 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="section-semi-title">Staff Lists</h5>
            <div id="people">
              <v-client-table :data="tableData" :columns="columns" :options="options">
                <template slot="actions" slot-scope="{tableData}">
                  <div class="btn-group" role="group">
                    <button class="btn btn-primary">
                      Edit
                    </button>
                    <button class="btn btn-danger">
                      Delete
                    </button>
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
      columns: ['username', 'fullname', 'email', 'address', 'role','actions'],
      tableData: [
        { username: 'abc', fullname: "abc def", email: "abc@gmail.com", address: "12/12 dhaka", role: 'employee' },

      ],
      options: {
        perPage: 2,
        perPageValues: [2],
        headings: {
          username: 'Username',
          fullname: 'Full Name',
          email: 'Email',
          address: 'Address',
          role: 'Role',
          action: "Action"
        },
        editableColumns: ['Username'],
        sortable: ['Username'],
        filterable: ['Username']
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
