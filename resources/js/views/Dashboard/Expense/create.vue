<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Add Expense</h3>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Add Expense</h6>
      </div>
      <div class="card-body">
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label class="label" for="name">Expense Date</label>
            <input type="text" class="form-control" id="name" placeholder="" required>
          </div>
          <div class="col-md-4 mb-3">
            <label class="label" for="category">Expense Category</label>
            <multiselect v-model="value" :options="SingleOptions" :searchable="true" :show-labels="false" placeholder="" id="category" />
          </div>
          <div class="col-md-4 mb-3">
            <label class="label" for="units">Ref No</label>
            <multiselect v-model="unit" :options="SingleOptions" :searchable="true" :show-labels="false" placeholder="" id="units" />
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label class="label" for="name">Total  Amount</label>
            <input type="text" class="form-control" id="name" placeholder="" required>
          </div>
          <div class="col-md-4 mb-3">
            <label class="label" for="category">Expense For</label>
            <multiselect v-model="value" :options="SingleOptions" :searchable="true" :show-labels="false" placeholder="" id="category" />
          </div>
        </div>
         <div class="form-row">
            <div class="col-md-4 mb-3">
              <label class="label" for="details">Details</label>
              <textarea id="details" rows="3" type="text" class="form-control"></textarea>
            </div>
            <div class="col-md-3 mb-3 mt-75">
              <button class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  data() {
    return {
      value: '',
      unit: '',
      SingleOptions: ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington'],
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
</style>
