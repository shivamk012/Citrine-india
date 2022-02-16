<template>
  <v-sheet
    color="rgba(240, 240, 242, 1)"
  >
    <v-toolbar
      dense
      flat
      height="80px"
      color="#F0F0F2"
    ></v-toolbar>
    <div class="text-center white--text" id="headingText">
      <p class="pt-3">Item</p>
    </div>
    <v-container class="mt-12">
      <v-row class="mt-2">
        <v-card
          color="rgba(240, 240, 242, 1)"
          class="mx-auto"
          width="450"
          flat
        >
          <v-carousel
            id="radi"
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
              <!-- <v-app-bar
                flat
                color="rgba(0, 0, 0, 0)"
              >

                <v-spacer></v-spacer>

                <v-btn
                  class="mr-16"
                  fab
                  dark
                  small
                  color="#25181D"
                >
                  <v-icon dark>
                    mdi-share-variant
                  </v-icon>
                </v-btn>
              </v-app-bar> -->
            </v-carousel-item>
          </v-carousel>
        </v-card>
        <v-card
          class="mx-auto"
          color="rgba(240, 240, 242, 1)"
          width="450"
          flat
        >
          <v-card-text color="#25181D">
            <p class="text-h3 grey--text text--darken-3">{{ displayProduct.name }}</p>
            <p class="text-h5">
              {{ displayProduct.description }}
            </p>
            <p class="text-h6">
              MRP : Rs 
              <span v-if="$store.state.user.role === 'wholesaler'">{{ displayProduct.wholesalePrice }}</span>
              <span v-else>{{ displayProduct.retailPrice }}</span>
            </p>
            <v-btn
              elevation="2"
              outlined
              block
              rounded
              @click="addToCart(displayProduct)"
              >
              Add to cart
            </v-btn>
            <v-btn
              elevation="2"
              color="#FB9012"
              class="mt-3 white--text"
              rounded
              block
              @click="buynow(displayProduct)"
              >
              Buy Now
            </v-btn>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-sheet>
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
    if (!this.$store.state.isUserLoggedin) {
      this.$router.push({name: 'login'})
    }
    const pname = this.$route.params.pname
    this.displayProduct = (await CatalogServices.productAndRelated(pname)).data
    console.log(this.displayProduct)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Montserrat', sans-serif;
  font-weight : 500 !important;
  height: 56px;
  font-size: 24px;
  line-height: 132%;
}
#radi{
  border-radius: 4px;
}
</style>
