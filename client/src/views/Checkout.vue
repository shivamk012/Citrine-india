<template>
    <v-form
      id="payment_form"
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
                    id="surl"
                    name="surl"
                    value="http://localhost:8080/paymentResponse"
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
                    value="http://localhost:8080/paymentResponse"
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
                    value="http://localhost:8080/paymentResponse"
                    v-show="false"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    
                >
                    <v-text-field
                    readonly
                    id="key"
                    v-model="key"
                    v-show="false"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    
                >
                    <v-text-field
                    readonly
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
                    label="Name"
                    v-model='user.name'
                    outlined
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    
                >
                    <v-text-field
                    readonly
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
                    label="Address1"
                    v-model="contactInfo.address1"
                    outlined
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    
                >
                    <v-text-field
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
                    label="Hash"
                    v-model="hash"
                    v-show="false"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>


<script>
import paymentServices from '../services/paymentServices'
    // import Hashgenerator from '../services/hashgenerator'   
    // import Paymentgateway from '../services/paymentgateway'
export default {
//   methods:{
//     checkForm: function (e) {
//       if (this.phoneNo) {
//         return true;
//       }

//       this.errors = [];

//       if (!this.phoneNo) {
//         this.errors.push('Phone Number Required.');
//       }

//       e.preventDefault();
//     }
//   },
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
  }
    // methods : {
    //     async submit(){
    //         let temp = {
    //             key : "ays59b",
    //             txnid : '23892392',
    //             amount : '10',
    //             productinfo : 'citrine-india-product',
    //             firstname : this.$store.state.user.name,
    //             email :     this.$store.state.user.email,
    //             phone : this.phonenumber,
    //             surl : 'http://localhost:8080/paymentsuccess',
    //             furl : 'http://localhost:8080/paymentfailure',
    //         };
    //         let value = Hashgenerator.hashingvalue(temp);
    //         let userDetails = Object.assign(temp , {hash : value});
    //         console.log(userDetails);
    //         let successresponse = await Paymentgateway.pay(userDetails);
    //         console.log(successresponse);
    //     }
    // }
}
</script>