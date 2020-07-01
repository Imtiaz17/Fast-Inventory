<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Add Product</h3>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Add Product</h6>
      </div>
      <div class="card-body">
        <form>
          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label class="label" for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="" required>
            </div>
            <div class="col-md-3 mb-3">
              <label class="label" for="category">Category</label>
              <multiselect v-model="value" :options="SingleOptions" :searchable="true" :show-labels="false" placeholder="" id="category" />
            </div>
            <div class="col-md-3 mb-3">
              <label class="label" for="units">Unit</label>
              <multiselect v-model="unit" :options="SingleOptions" :searchable="true" :show-labels="false" placeholder="" id="units" />
            </div>
            <div class="col-md-3 mb-3">
              <label class="label" for="qty">Quantity</label>
              <input type="number" class="form-control" id="qty" placeholder="" required>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label class="label" for="img">Image</label>
              <input id="img" type="file" class="form-control-file">
            </div>
            <div class="col-md-3 mb-3">
              <label class="label" for="Suppliers">Suppliers</label>
              <multiselect v-model="value" :options="SingleOptions" :searchable="true" :show-labels="false" placeholder="" id="Suppliers" />
            </div>
            <div class="col-md-3 mb-3">
              <label class="label" for="pp">Purchase price</label>
              <input type="number" class="form-control" id="pp" placeholder="" required>
            </div>
            <div class="col-md-3 mb-3">
              <label class="label" for="sp">Sell price</label>
              <input type="number" class="form-control" id="sp" placeholder="" required>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label class="label" for="details">Details</label>
              <textarea id="details" rows="3" type="text" class="form-control"></textarea>
            </div>
            <div class="col-md-3 mb-3 mt-75">
              <button class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
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
