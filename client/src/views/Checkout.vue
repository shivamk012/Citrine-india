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
      <p class="pt-3">CONFIRMATION</p>
    </div>
    <v-container>
      <v-row>
        <v-col
          md="8"
        >
          <form
            id="payment-form"
            action="https://test.payu.in/_payment"
            method="post"
          >
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    name="txnid"
                    label="Transaction ID"
                    id="txnid"
                    v-model="orderId"
                    hint="Unique key for transaction"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"                    
                >
                  <v-text-field
                    readonly
                    id="firstname"
                    name="firstname"
                    label="Name"
                    v-model='firstname'
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    id="email"
                    name="email"
                    label="Email"
                    v-model='user.email'
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    id="amount"
                    name="amount"
                    label="Amount"
                    v-model='cartTotal.totalPrice'
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    name="productInfo"
                    id="productInfo"
                    v-model="cart"
                    v-show="false"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    id="phone"
                    name="phone"
                    label="Mobile Number"
                    v-model="contactInfo.phone"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    id="address1"
                    name="address1"
                    label="Address1"
                    v-model="contactInfo.address1"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    id="address2"
                    name="address2"
                    readonly
                    label="Address2"
                    v-model="contactInfo.address2"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    id="city"
                    name="city"
                    readonly
                    label="City"
                    v-model="contactInfo.city"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    id="state"
                    name="state"
                    readonly
                    label="State"
                    v-model="contactInfo.state"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    id="zipcode"
                    name="zipcode"
                    label="Pin Code"
                    v-model="contactInfo.pinCode"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    id="hash"
                    name="hash"
                    label="Hash"
                    v-model="hash"
                    v-show="false"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <input
                        type="submit"
                        value="Submit"
                        > 
                  <!-- <input
                    type="submit"
                    value="Pay"
                  > -->
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    name="udf5"
                    id="udf5"
                    v-model="udf5"
                    v-show="false"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    name="surl"
                    id="surl"
                    value="http://localhost:8081/response"
                    v-show="false"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    id="furl"
                    name="furl"
                    value="http://localhost:8081/response"
                    v-show="false"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    readonly
                    id="curl"
                    name="curl"
                    value="http://localhost:8081/response"
                    v-show="false"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"                    
                >
                  <v-text-field
                    readonly
                    name="key"
                    id="key"
                    v-model="key"
                    v-show="false"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </form>
        </v-col>
        <v-col
          md="4"
        >
          <v-simple-table class="mt-10 elevation-2">
            <template>
              <thead>
                <tr>
                  <th id="tableHead" class="#25181D--text" v-for="item in headers" :key="item.text">
                    {{item.text}}
                  </th>
                </tr>
              </thead>
              <tbody id="tableBody">
                <tr
                  v-for="item in cartItems"
                  :key="item.product._id"
                >
                  <td class="mb-3" style="height:100px;">
                    <div class="mt-3 mb-3">
                      <v-row class="mt-1">
                        <v-card
                          width="120"
                          flat
                          class="mb-3"
                        >
                          <v-img
                            :src ="item.product.image[0]"
                            aspect-ratio = 1
                          ></v-img>
                        </v-card>
                        <v-card
                          width="150"
                          flat
                          color="rgba(240, 240, 242, 1)"
                        >
                          <v-card-text>
                            <p class="grey--text text--darken-3">{{ item.product.name }}</p>
                          </v-card-text>
                        </v-card>
                      </v-row>
                    </div>
                  </td>
                  <td v-if="$store.state.user.role !== 'customer'">{{ item.product.wholesalePrice }} x {{ item.quantity }}</td>
                  <td v-else>{{ item.product.retailPrice }} x {{ item.quantity }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-container>
            <v-card
              id="totalCalc"
              class="elevation-1 mt-10"
              width="400"
              color="rgba(240, 240, 242, 1)"
            >
              <!-- <v-card-title class="text-h5">Order Summary</v-card-title> -->
              <!-- <v-divider></v-divider> -->
              <v-card-text>
                <v-row class="text-center">
                  <v-col
                    cols="6"
                  >
                    Subtotal
                  </v-col>
                  <v-col cols="6">
                    <v-icon>
                      mdi-CurrencyInr
                    </v-icon>
                    {{ cartTotal.totalPrice }}
                  </v-col>
                </v-row>
                <v-row class="text-center">
                  <v-col
                    cols="6"
                  >
                    Shipping
                  </v-col>
                  <v-col cols="6">
                    FREE
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text>
                <v-row class="text-center text-h5">
                  <v-col
                    cols="6"
                  >
                    Total
                  </v-col>
                  <v-col cols="6">
                    {{ cartTotal.totalPrice }}
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <!-- <v-btn
              elevation="2"
              color="#FB9012"
              block
              x-large
              class="white--text mt-3"
              @click="navigateTo({
                name:'contactInfo',
                params:{
                  name: $store.state.user.name
                }
              })"
              >
              Buy Now
            </v-btn> -->
            <v-btn 
              elevation="2"
              color="#FB9012"
              block
              x-large
              class="white--text mt-3"
              @click="navigateTo({
                name:'contactInfo',
                params:{
                  name: $store.state.user.name
                }
              })">
              <v-icon>
                mdi-chevron-left
              </v-icon>
              Contact Information
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>


<script>
import paymentServices from '../services/paymentServices'
import userServices from '../services/userServices'
   
export default {
  data: () => ({
    orderId: null,
    key: null,
    hash: null,
    firstname: null,
    udf5: null,
    headers: [
      {
        text: 'Your Order',
        align: 'start',
        sortable: false,
        value: 'name',
        width : '500px',
      },
      { text: '', value: ''},
    ],
  }),
  computed:{
    contactInfo: function () {
      return this.$store.getters.contactInfo
    },
    user: function () {
      return this.$store.state.user
    },
    cart: function () {
      let cart = '';
      this.$store.state.cart.forEach(item => {
        cart += item.product.productCode
      });
      return cart
    },
    cartItems: function () {
      return this.$store.state.cart
    },
    cartTotal: function () {
      return this.$store.getters.cartTotal
    }
  },
  async mounted () {
    const res = (await paymentServices.txnid(this.user._id)).data
    this.udf5 = res.udf5
    this.orderId = res.txnid
    this.firstname = this.user.name.substr(0,this.user.name.indexOf(" "));
    let payload = {
    txnid: this.orderId,
    amount: this.cartTotal.totalPrice,
    productInfo: this.cart,
    firstname: this.firstname,
    email: this.user.email,
    phone: this.contactInfo.phone,
    udf5: this.udf5, // particular to a payment
    surl: "http://localhost:8081/response",
    furl: "http://localhost:8081/response",
    curl: "http://localhost:8081/response",
    }
    const obj = (await paymentServices.hash(payload)).data;
    console.log(this.hash);
    this.hash = obj.hash
    this.key = obj.key
  },
  methods:{
    navigateTo(route){
      this.$router.push(route)
    },
    async paylink(id){
      if (confirm('Are you sure you want to genrate payment link?')) {
        const res = (await userServices.createLink(id)).data
        if (res.success) {
          alert(`${res.msg}`)
          this.navigateTo({name: 'home'})
        }
        if (!res.success) {
          alert('Link generation failed!')
        }
      }
    }
  }
}
</script>

<style scoped>
  #headingText{
    background-color:rgba(37, 24, 29, 1);
    font-family: 'Cormorant Garamond', serif !important;
    font-weight : 500 !important;
    height: 56px;
    font-size: 24px;
    line-height: 132%;
  }
  #tableHead{
    background-color: rgba(240, 240, 242, 1);
    color: #25181D;
    font-family: 'Montserrat', sans-serif;
    font-size: 21px;
  }
  #tableBody{
    background-color: rgba(240, 240, 242, 1);
    color: #25181D;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
  }
</style>