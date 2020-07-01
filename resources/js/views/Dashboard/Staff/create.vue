<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Add Staff</h3>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-sm-8">
        <div class="card">
          <div class="card-header">
            <h6>Add Staff</h6>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group row">
                <label for="inputname1" class="col-sm-2 col-form-label">User Name</label>
                <div class="col-sm-6">
                  <input id="inputname1" type="text" class="form-control" placeholder="">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputname2" class="col-sm-2 col-form-label">Full Name</label>
                <div class="col-sm-6">
                  <input id="inputname2" type="text" class="form-control" placeholder="">
                </div>
              </div>

              <div class="form-group row">
                <label for="inputEmail1" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-6">
                  <input id="inputEmail1" type="text" class="form-control" placeholder="">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputphone1" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-6">
                  <input id="inputphone1" type="password" class="form-control" placeholder="">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputaddress1" class="col-sm-2 col-form-label">Address</label>
                <div class="col-sm-6">
                  <textarea id="inputaddress1" rows="3" type="text" class="form-control"></textarea> 
                </div>
              </div>
              <div class="form-group row">
                <label for="inputaddress1" class="col-sm-2 col-form-label">Role</label>
                <div class="col-sm-6">
                  <multiselect v-model="value" :options="SingleOptions" :searchable="true" :show-labels="false" placeholder="" id="category" />
                </div>
              </div>
              <div class="form-group row justify-content-end">
                <div class="col-sm-10">
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
