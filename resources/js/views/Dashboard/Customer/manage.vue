<template>
  <div class="main-content">
    <div class="page-header">
      <h4 class="page-title">Manage Categories</h4>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-10 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="section-semi-title">Category List</h5>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Aaction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Colgate Toothpaste</td>
                  <td><span class="label label-success">in stock</span></td>
                  <td>$5</td>
                  <td>$6</td>
                  <td>
                    <button class="btn btn-primary btn-sm">
                    Edit
                  </button>

                  <button class="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
                </tr>
                
              </tbody>
            </table>
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
