<template>
  <v-sheet
    color= "rgba(240, 240, 242, 1)"
  >
    <!-- toolbar to give extra space -->
    <v-toolbar
      dense
      flat
      height="80px"
      color="#F0F0F2"
    ></v-toolbar>
    <div class="text-center white--text" id="headingText">
      <p class="pt-3">Ship And Returns</p>
    </div>
    <v-container>
      <br>
      <br>
      <h3>Team&nbsp;</h3>
      <p>
        our aim is to deliver the order to you within 7 days of your order however it depends on the product. Generally, all domestic orders will take about 3-4 days for delivery from the date of dispatch. Further information on the order status can be provided by our customer Care.
      </p>
      <h3>
        Cost
      </h3>
      <p>
        A flat fee of ₹100 is charged on all domestic orders. Free shipping is offered to customers if the ordered value exceeds ₹2000.
      </p>
      <h3>
        Insurance
      </h3>
      <p>
        We insure each purchase during the time it is in transit until it is delivered to you. We require a signature for any goods delivered.
      </p>
      <h3>
        Taxes&nbsp;
      </h3>
      <p>
        Product prices displayed are inclusive of all taxes and duties.
      </p>
    </v-container>
  </v-sheet>
</template>

<style scoped>
#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Cormorant Garamond', serif !important;
  font-weight : 500 !important;
  height: 56px;
  font-size: 24px;
  line-height: 132%;
  margin-top: 24px;
}
</style>