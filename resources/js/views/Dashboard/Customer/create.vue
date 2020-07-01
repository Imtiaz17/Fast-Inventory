<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Add Customer</h3>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-sm-8">
        <div class="card">
          <div class="card-header">
            <h6>Add Customer</h6>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group row">
                <label for="inputname1" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-6">
                  <input id="inputname1" type="text" class="form-control" placeholder="">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputEmail1" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-6">
                  <input id="inputEmail1" type="text" class="form-control" placeholder="">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputphone1" class="col-sm-2 col-form-label">Phone</label>
                <div class="col-sm-6">
                  <input id="inputphone1" type="text" class="form-control" placeholder="">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputaddress1" class="col-sm-2 col-form-label">Address</label>
                <div class="col-sm-6">
                  <textarea id="inputaddress1" rows="3" type="text" class="form-control"></textarea> 
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
export default {
  data() {
    return {

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
