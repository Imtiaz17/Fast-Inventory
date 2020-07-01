<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Purchase</h3>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label class="label" for="supplier">Supplier:</label>
            <multiselect v-model="unit" :options="SingleOptions" :searchable="true" :show-labels="false" placeholder="" id="supplier" />
          </div>
          <div class="col-md-3 mb-3">
            <label class="label" for="category">Purchase Date:</label>
            <datepicker input-class="form-control" placeholder="Select Date" />
          </div>
          <div class="col-md-3 mb-3">
            <label class="label" for="refno">Reference No:</label>
            <input type="text" class="form-control" id="refno" placeholder="" required>
          </div>
          <div class="col-md-3 mb-3">
            <label class="label" for="units">Status:</label>
            <multiselect v-model="unit" :options="SingleOptions" :searchable="true" :show-labels="false" placeholder="" id="units" />
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="form-row justify-content-md-center">
          <div class="col-md-8 mb-3">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
              </div>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>
          <div class="col-md-2">
            <button tabindex="-1" type="button" class="btn btn-link btn-modal"><i class="fa fa-plus"></i> Add new product </button>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-condensed table-bordered table-th-green text-center table-striped" id="purchase_entry_table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Purchase Quantity</th>
                    <th>Unit Cost (Before Discount)</th>
                    <th>Discount Percent</th>
                    <th>Unit Cost (Before Tax)</th>
                    <!-- <th class="hide">Subtotal (Before Tax)</th>
                    <th class="hide">Product Tax</th>
                    <th class="hide">Net Cost</th> -->
                    <th>Line Total</th>
                    <th class="">
                      Profit Margin % </th>
                    <th>
                      Unit Selling Price </th>
                    <th><i class="fa fa-trash" aria-hidden="true"></i></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="sr_number">1</span></td>
                    <td>
                      Mango (00092)
                    </td>
                    <td>
                      <input name="purchases[0][product_id]" type="hidden" value="5">
                      <input class="hidden_variation_id" name="purchases[0][variation_id]" type="hidden" value="5">
                      <input class="form-control input-sm purchase_quantity input_number mousetrap" required="" data-rule-abs_digit="true" data-msg-abs_digit="Decimal value not allowed" name="purchases[0][quantity]" type="text" value="1.00">
                      <input type="hidden" class="base_unit_cost" value="32.00">
                      <input type="hidden" class="base_unit_selling_price" value="40.00">
                      <input type="hidden" name="purchases[0][product_unit_id]" value="1">
                      Pc(s)
                    </td>
                    <td>
                      <input class="form-control input-sm purchase_unit_cost_without_discount input_number" required="" name="purchases[0][pp_without_discount]" type="text" value="32.00">
                    </td>
                    <td>
                      <input class="form-control input-sm inline_discounts input_number" required="" name="purchases[0][discount_percent]" type="text" value="0">
                    </td>
                    <td>
                      <input class="form-control input-sm purchase_unit_cost input_number" required="" name="purchases[0][purchase_price]" type="text" value="32.00">
                    </td>
                    <td>
                      <span class="row_subtotal_after_tax display_currency">32.00</span>
                      <input type="hidden" class="row_subtotal_after_tax_hidden" value="32.00">
                    </td>
                    <td class="">
                      <input class="form-control input-sm input_number profit_percent" required="" name="purchases[0][profit_percent]" type="text" value="25.00">
                    </td>
                    <td>
                      <input class="form-control input-sm input_number default_sell_price" required="" name="purchases[0][default_sell_price]" type="text" value="40.00">
                    </td>
                    <td><i class="fa fa-times remove_purchase_entry_row text-danger" title="Remove" style="cursor:pointer;"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-row mb-3">
              <label for="" class="col-sm-4 control-label">Total Quantities</label>
              <div class="col-sm-4">
                <label class="control-label total_quantity text-success" style="font-size: 15pt;">2</label>
              </div>
            </div>
            <div class="form-row mb-3">
              <label for="other_charges_input" class="col-sm-4 control-label">Other Charges</label>
              <div class="col-sm-4">
                <input type="text" class="form-control text-right only_currency" id="other_charges_input" name="other_charges_input" onkeyup="final_total();" value="">
              </div>
              <div class="col-sm-4">
                <select class="form-control " id="other_charges_tax_id" name="other_charges_tax_id" onchange="final_total();" style="width: 100%;">
                  <option>None</option>
                  <option data-tax="5.00" value="4">Vat 5%</option>
                  <option data-tax="10.00" value="5">Tax 10%</option>
                  <option data-tax="18.00" value="6">Tax 18%</option>
                  <option data-tax="4.50" value="7">IGST 4.5%</option>
                  <option data-tax="4.50" value="8">SGST 4.5%</option>
                  <option data-tax="9.00" value="9">GST 9%</option>
                  <option data-tax="9.00" value="10">ISGT 9%</option>
                  <option data-tax="9.00" value="11">SGST 9%</option>
                  <option data-tax="18.00" value="12">GST 18%</option>
                </select>
              </div>
            </div>
            <div class="form-row mb-3">
              <label for="discount_to_all_input" class="col-sm-4 control-label">Discount on All</label>
              <div class="col-sm-4">
                <input type="text" class="form-control  text-right only_currency" id="discount_to_all_input" name="discount_to_all_input" onkeyup="enable_or_disable_item_discount();" value="">
              </div>
              <div class="col-sm-4">
                <select class="form-control" onchange="final_total();" id="discount_to_all_type" name="discount_to_all_type">
                  <option value="in_percentage">Per%</option>
                  <option value="in_fixed">Fixed</option>
                </select>
              </div>
            </div>
            <div class="form-row mb-3">
              <label for="purchase_note" class="col-sm-4 control-label">Note</label>
              <div class="col-sm-8">
                <textarea class="form-control text-left" id="purchase_note" name="purchase_note"></textarea>
                <span id="purchase_note_msg" style="display:none" class="text-danger"></span>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <table class="col-md-9">
                    <tbody>
                      <tr>
                        <th class="text-right" style="font-size: 17px;">Subtotal</th>
                        <th class="text-right" style="padding-left:10%;font-size: 17px;">
                          <h4>
                            ₹ <b id="subtotal_amt" name="subtotal_amt">0.00</b> </h4>
                        </th>
                      </tr>
                      <tr>
                        <th class="text-right" style="font-size: 17px;">Other Charges</th>
                        <th class="text-right" style="padding-left:10%;font-size: 17px;">
                          <h4>
                            ₹ <b id="other_charges_amt" name="other_charges_amt">0.00</b> </h4>
                        </th>
                      </tr>
                      <tr>
                        <th class="text-right" style="font-size: 17px;">Discount on All</th>
                        <th class="text-right" style="padding-left:10%;font-size: 17px;">
                          <h4>
                            ₹ <b id="discount_to_all_amt" name="discount_to_all_amt">0.00</b></h4>
                        </th>
                      </tr>
                      <tr style="">
                        <th class="text-right" style="font-size: 17px;">Round Off
                          <i class="hover-q " data-container="body" data-toggle="popover" data-placement="top" data-content="Go to Site Settings-> Site -> Disable the Round Off(Checkbox)." data-html="true" data-trigger="hover" data-original-title="Do you wants to Disable Round Off ?" title="">
                            <i class="fa fa-info-circle text-maroon text-black hover-q"></i>
                          </i>
                        </th>
                        <th class="text-right" style="padding-left:10%;font-size: 17px;">
                          <h4>
                            ₹ <b id="round_off_amt" name="tot_round_off_amt">0.00</b></h4>
                        </th>
                      </tr>
                      <tr>
                        <th class="text-right" style="font-size: 17px;">Grand Total</th>
                        <th class="text-right" style="padding-left:10%;font-size: 17px;">
                          <h4>
                            ₹ <b id="total_amt" name="total_amt">0.00</b></h4>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="label" for="refno">Amount:</label>
            <input type="text" class="form-control" id="amount" placeholder="" required>
          </div>
          <div class="col-md-6 mb-3">
            <label class="label" for="pmethod">Payment Method:</label>
            <input type="text" class="form-control" id="pmethod" placeholder="" required>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 mb-3">
            <label class="label" for="note">Amount:</label>
            <textarea id="note" rows="3" type="text" class="form-control"></textarea>
          </div>
        </div>
        <hr>
         <div class="row">
         <div class="col-md-4 offset-md-10">
              <label class="label" for="note">Payment Due: 0.00 TK</label>
          </div>
        </div>
        <div class="row">
         <div class="col-md-4 offset-md-11">
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
import Datepicker from 'vuejs-datepicker'
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect, Datepicker },
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
