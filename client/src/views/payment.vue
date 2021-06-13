<template>
    <form>
        <v-text-field
            v-model = "phonenumber"
            placeholder = "number"
            required   
        >
        </v-text-field>
        <v-btn
            @click = "submit"
            depressed
            elevation = "2"
        >
        Submit</v-btn>
    </form>
</template>
<script>
    import Hashgenerator from '../services/hashgenerator'   
    import Paymentgateway from '../services/paymentgateway'
export default {
    methods : {
        async submit(){
            let temp = {
                key : "ays59b",
                txnid : '23892392',
                amount : '10',
                productinfo : 'citrine-india-product',
                firstname : this.$store.state.user.name,
                email :     this.$store.state.user.email,
                phone : this.phonenumber,
                surl : 'http://localhost:8080/paymentsuccess',
                furl : 'http://localhost:8080/paymentfailure',
            };
            let value = Hashgenerator.hashingvalue(temp);
            let userDetails = Object.assign(temp , {hash : value});
            console.log(userDetails);
            let successresponse = await Paymentgateway.pay(userDetails);
            console.log(successresponse);
        }
    }
}
</script>