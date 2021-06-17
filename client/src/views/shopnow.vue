<template>
  <div>
    <v-container>
      <h2  class="text-center mt-4 mb-4">Title</h2>
      <v-divider></v-divider>
    </v-container>
    <v-container class="mt-12">
      <v-row class="mt-2">
        <v-card
          class="mx-auto"
          width="450"
          flat
        >
          <v-carousel
            :continuous="false"
            :cycle="cycle"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="400"
            width="450"
          >
            <v-carousel-item
              v-for="(src, i) in displayProduct.image"
              :key="i"
              :src="src"
              contain
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
        <v-card
          class="mx-auto"
          width="450"
          flat
        >
          <v-card-text>
            <p class="text-h3 grey--text text--darken-3">{{ displayProduct.name }}</p>
            <p class="text-h5">
              {{ displayProduct.description }}
            </p>
            <p class="text-h6">MRP : <span>Rs {{ displayProduct.retailPrice }}</span></p>
            <v-btn
              elevation="2"
              outlined
              block
              @click="addToCart(displayProduct)"
              >
              Add to cart
            </v-btn>
            <v-btn
              elevation="2"
              color="black"
              class="white--text mt-3"
              block
              @click="buynow(displayProduct)"
              >
              Buy Now
            </v-btn>
            <v-btn
              color="white"
              class="black--text mt-3 mr-3"
              >
              Share
            </v-btn>
            <v-btn
              color="white"
              class="black--text mt-3"
              >
              Share
            </v-btn>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CatalogServices from '../services/catalogServices';
import CartServices from '../services/cartServices';

export default {
  data () {
    return {
      showAnimation: false,
      displayProduct:null,
    }
  },

  methods : {
    navigateTo(route){
      this.$router.push(route);
    },
    buynow(doc){
      if (!this.$store.state.isUserLoggedin) {
        this.$router.push({name:'login'})
      }

      this.$store.dispatch('addToCart', {
        product: doc,
        quantity: 1
      })
      this.navigateTo({
        name:'cart',
        params:{
          user:this.$store.state.user.name
        }
      })
      // this.$router.push({
      //   name:'contactInfo',
      //   params:{
      //     pname:this.displayProduct.name
      //   }
      // })
    },
    async addToCart (doc) {
      if (!this.$store.state.isUserLoggedin) {
        this.$router.push({name:'login'})
      }

      console.log('button pressed shopnow')

      this.$store.dispatch('addToCart', {
        product: doc,
        quantity: 1
      })

      await CartServices.post({
        customer: this.$store.state.user._id,
        cart:{
          productId: doc._id,
          quantity: 1,
        },
      })
    }
  },
  async mounted () {
    const pname = this.$route.params.pname
    this.displayProduct = (await CatalogServices.productAndRelated(pname)).data
  }
}
</script>

<style scoped>
</style>
