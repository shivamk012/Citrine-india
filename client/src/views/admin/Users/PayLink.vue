<template>
  <adminuser>
    <div v-if="payLink">
      <v-card
        class="mt-10"
      >
        <v-row v-for="i in length" :key="i">
          <v-col md="2">
            <v-card-subtitle id="subHeading">User</v-card-subtitle>
            <v-card-title id="heading" class="mt-n6">{{ userData.name }}</v-card-title>
          </v-col>
          <v-col md="2">
            <v-card-subtitle id="subHeading" class="ml-2">Email</v-card-subtitle>
            <v-card-title id="heading" class="mt-n6 ml-2">{{ userData.email }}</v-card-title>
          </v-col>
          <v-col md="2">
            <v-card-subtitle id="subHeading" class="ml-2">Amount</v-card-subtitle>
            <v-card-title id="heading" class="mt-n6 ml-2">{{ userData.amount[i-1] }}</v-card-title>
          </v-col>
          <v-col md="3">
            <v-btn
              v-if="payLink[i-1].activated"
              outlined 
              rounded 
              color="red" 
              class="mt-4"
              @click="payLink(payLink[i-1]._id)"
            >
              Generate Link
            </v-btn>
          </v-col>
          <v-col md="3">
            <div v-for="items in userCart[i-1]" :key="items.product._id">
              <v-card-text>
                ProductCode--{{ items.product.productCode }} quant--{{ items.quantity }}
              </v-card-text>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </adminuser>
</template>

<script>
import UserServices from '../../../services/userServices'

export default {
  data: () => ({
    payLink: null,
    show:false,
    userCart: null,
    userData: null,
    length: null,
  }),
  async mounted () {
    const userId = this.$route.params.userId
    const response = (await UserServices.getPaylinkReq(userId)).data
    this.payLink = response.paylinkData
    this.userCart = response.userCart
    this.userData = response.userData
    this.length = this.payLink.length;
    console.log(this.length)
  },
  methods:{
    async cartDetails(){
      if (this.show) {
        this.show = false
        return
      }
      this.show = true
    },
    async payLink(id) {
      if (confirm('Are u sure payment is completed!')) {
        await UserServices.payLinkSuccess(id);
        window.location.reload();
      }
    }
  }
}
</script>