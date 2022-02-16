<template>
  <dashboard>
    <v-container>
      <div v-if="previousOrders">
        <v-card
          id="card"
          class="mt-10"
          color="rgba(240, 240, 242, 1)"
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
                @click="show = !show"
              >
                {{ show ? 'Order Again' : 'Details' }}
              </v-btn>
            </v-col>
          </v-row>
          <v-expand-transition>
            <div v-show="show">
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
      <v-card width="494.8px" height="365.15px" flat color="rgba(240, 240, 242, 1)" class="track_order text-center" v-else>
        <v-img class="ml-6" src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/orderHistory.png" aspect-ratio="1.355" width="494.8px" height="365.15px"></v-img>
        <p id="hist">You have no order history</p>
      </v-card>
    </v-container>
  </dashboard>
</template>

<script>
import UserServices from '../../services/userServices'

export default {
  data: () => ({
    previousOrders: null,
    show:false,
  }),
  async mounted () {
    this.previousOrders = (await UserServices.previousOrders(this.$store.state.user._id)).data
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
#hist{
  font-family: 'Montserrat', sans-serif;
  color: #FB9012;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
}
#subHeading{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #25181D;
  opacity: 0.6;
}
#heading{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
}
.v-card__title{
  word-break: keep-all !important;
}
.track_order{
  opacity: .8;
}
</style>