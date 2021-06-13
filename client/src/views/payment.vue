<template>
  <!-- <form
    id="payment_form"
    @submit="checkForm"
    action="https://test.payu.in/_payment"
    method="post"
    >

    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
        <li v-for="error in errors">{{ error }}</li>
        </ul>
    </p>


    <label for="name">Name</label>
    <v-text-field
        id="name"
        v-model="name"
        value="John Doe"
        label="Solo"
        solo
        readonly
    ></v-text-field>

    <input
    type="submit"
    value="Submit"
    />


  </form> -->
  <form action="https://test.payu.in/_payment" id="payment_form" method="Post">
    
	<!-- Contains information of integration type. Consult to PayU for more details.//-->
	<input type="hidden" id="udf5" name="udf5" value="PayUBiz_NODE_JS_KIT" />
    
	<!-- Required - Response callback url to be used by Payment Gateway to post back payment status. 
			surl - for success tranction, furl - for failure transaction, curl - for cancel transaction. //-->
	<input type="hidden" id="surl" name="surl" value="http://localhost:8081/response.html" />
	<input type="hidden" id="furl" name="furl" value="http://localhost:8081/response.html" />
    <input type="hidden" id="curl" name="curl" value="http://localhost:8081/response.html" />
	<input type="hidden" id="key" name="key" value="<%= key %>" />
    <div class="dv">
    <span class="text"><label>Transaction/Order ID:</label></span>
    <span>
	<!-- Required - Unique transaction id or order id to identify and match 
				payment with local invoicing. Datatype is Varchar with a limit of 25 char. //-->
	<input type="text" id="txnid" name="txnid" placeholder="Transaction ID" value="<%= orderid %>" /></span>
    </div>
    
    <div class="dv">
    <span class="text"><label>Amount:</label></span>
    <span>
	<!-- Required - Transaction amount of float type. //-->
	<input type="text" id="amount" name="amount" placeholder="Amount" value="6.00" /></span>    
    </div>
    
    <div class="dv">
    <span class="text"><label>Product Info:</label></span>
    <span>
	<!-- Required - Purchased product/item description or SKUs for future reference. 
				Datatype is Varchar with 100 char limit. //-->
	<input type="text" id="productinfo" name="productinfo" placeholder="Product Info" value="P01,P02" /></span>
    </div>
    
    <div class="dv">
    <span class="text"><label>First Name:</label></span>
    <span>
	<!-- Required - Should contain first name of the consumer. Datatype is Varchar with 60 char limit. //-->
	<input type="text" id="firstname" name="firstname" placeholder="First Name" value="" /></span>
    </div>
    
	<div class="dv">
    <span class="text"><label>Last Name:</label></span>
    <span>
	<!-- Should contain last name of the consumer. Datatype is Varchar with 50 char limit. //-->
	<input type="text" id="Lastname" name="Lastname" placeholder="Last Name" value="" /></span>
    </div>
	
    <div class="dv">
    <span class="text"><label>Email ID:</label></span>
    <span>
	<!-- Required - An email id in valid email format has to be posted. Datatype is Varchar with 50 char limit. //-->
	<input type="text" id="email" name="email" placeholder="Email ID" value="" /></span>
    </div>
    
    <div class="dv">
    <span class="text"><label>Mobile/Cell Number:</label></span>
    <span>
	<!-- Required - Datatype is Varchar with 50 char limit and must contain chars 0 to 9 only. 
				This parameter may be used for land line or mobile number as per requirement of the application. //-->
	<input type="text" id="phone" name="phone" placeholder="Mobile/Cell Number" value="" /></span>
    </div>
	
	<div class="dv">
    <span class="text"><label>Address1:</label></span>
    <span><input type="text" id="address1" name="address1" placeholder="Address1" value="" /></span>
    </div>
    
    <div class="dv">
    <span class="text"><label>Address2:</label></span>
    <span><input type="text" id="address2" name="address2" placeholder="Address2" value="" /></span>
    </div>
    
    <div class="dv">
    <span class="text"><label>City:</label></span>
    <span><input type="text" id="city" name="city" placeholder="City" value="" /></span>
    </div>
    
    <div class="dv">
    <span class="text"><label>State:</label></span>
    <span><input type="text" id="state" name="state" placeholder="State" value="" /></span>
    </div>
    
    <div class="dv">
    <span class="text"><label>Country:</label></span>
    <span><input type="text" id="country" name="country" placeholder="Country" value="" /></span>
    </div>
    
	<div class="dv">
    <span class="text"><label>Zip Code:</label></span>
    <span>
	<!-- Datatype is Varchar with 20 char limit only 0-9. //-->
	<input type="text" id="Zipcode" name="Zipcode" placeholder="Zip Code" value="" /></span>
    </div>
	
	<div class="dv">
    <span class="text"><label>PG:</label></span>
    <span>
	<!-- Not mandatory but fixed code can be passed to Payment Gateway to show default payment 
				option tab. e.g. NB, CC, DC, CASH, EMI. Refer PDF for more details. //-->
	<input type="text" id="Pg" name="Pg" placeholder="PG" value="CC" /></span>
    </div>
	
    <div class="dv">
    <span class="text"><label>Hash:</label></span>
    <span>
	<!-- Required - Hash signature generated based on mandatory 
				parameter values. Refer kit's code for more details. //-->
	<input type="text" id="hash" name="hash" placeholder="Hash" value="" /></span>
    </div>
    <div id="alertinfo" class="dv"></div>
    
    <div><input type="submit" value="Pay" /></div>
  </form>
</template>
<script>
    import Hashgenerator from '../services/hashgenerator'   
    import Paymentgateway from '../services/paymentgateway'
export default {
  methods:{
    checkForm: function (e) {
      if (this.phoneNo) {
        return true;
      }

      this.errors = [];

      if (!this.phoneNo) {
        this.errors.push('Phone Number Required.');
      }

      e.preventDefault();
    }
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