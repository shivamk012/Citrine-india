<template>
  <adminuser>
    <div v-if="previousOrders">
      <v-card
        class="mt-10"
      >
        <v-row v-for="item in previousOrders" :key="item._id">
          <v-col md="3">
            <v-card-subtitle id="subHeading">Transaction Id</v-card-subtitle>
            <v-card-title id="heading" class="mt-n6">{{ item.txnid }}</v-card-title>
          </v-col>
          <v-col md="3">
            <v-card-subtitle id="subHeading" class="ml-2">Amount</v-card-subtitle>
            <v-card-title id="heading" class="mt-n6 ml-2">{{ item.amount }}</v-card-title>
          </v-col>
          <v-col md="3">
            <v-card-subtitle id="subHeading">Status</v-card-subtitle>
            <v-card-title v-if="item.status === 'success'" id="heading" class="mt-n6 green--text">Success</v-card-title>
            <v-card-title v-else id="heading" class="mt-n6 red--text">Failed</v-card-title>
          </v-col>
          <v-col md="3">
            <v-btn
              outlined 
              rounded 
              color="#FB9012" 
              class="mt-4"
              @click="cartDetails(item.udf5)"
            >
              {{ show ? 'Hide' : 'Details' }}
            </v-btn>
          </v-col>
        </v-row>
        <v-expand-transition>
          <div v-show="show">
            <v-card-text>
              {{ cartItems }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </adminuser>
</template>

<script>
import CartServices from '../../../services/cartServices'
import UserServices from '../../../services/userServices'

export default {
  data: () => ({
    previousOrders: null,
    show:false,
    cartItems:null,
  }),
  async mounted () {
    const userId = this.$route.params.userId
    this.previousOrders = (await UserServices.previousOrders(userId)).data
  },
  methods:{
    async cartDetails(id){
      if (this.show) {
        this.show = false
        return
      }
      this.cartItems = (await CartServices.cartItems(id)).data
      this.show = true
    }
  }
}
</script>