<template>
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
                    name="udf5"
                    id="udf5"
                    value="citrine-india-payment"
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
                    value="http://localhost:8081/paymentResponse"
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
                    value="http://localhost:8081/paymentResponse"
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
                    value="http://localhost:8081/paymentResponse"
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
                    v-show="true"
                    ></v-text-field>
                </v-col>
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
                </v-col>
            </v-row>
        </v-container>
    </form>
</template>


<script>
import paymentServices from '../services/paymentServices'
    // import Hashgenerator from '../services/hashgenerator'   
    // import Paymentgateway from '../services/paymentgateway'
export default {
  data: () => ({
    orderId: null,
    key: null,
    hash: null,
    firstname: null,
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
    cartTotal : function () {
        return this.$store.getters.cartTotal
    }
  },
  async mounted () {
      this.orderId = (await paymentServices.txnid()).data
      console.log(this.orderId)
      let firstname = this.user.name.substr(0,this.user.name.indexOf(" "));
      let payload = {
        txnid: this.orderId,
        amount: this.cartTotal.totalPrice,
        productInfo: this.cart,
        firstname,
        email: this.user.email,
        phone: this.contactInfo.phone,
        udf5: 'citrine-india-payment', // particular to a payment
        surl: "http://localhost:8081/paymentResponse",
        furl: "http://localhost:8081/paymentResponse",
        curl: "http://localhost:8081/paymentResponse",
      }
      console.log(payload)
      const obj = (await paymentServices.hash(payload)).data;
      this.hash = obj.hash
      this.key = obj.key
      this.firstname = firstname
      console.log(payload, this.hash, this.key, this.firstname)
      this.$store
  },
  
}
</script>