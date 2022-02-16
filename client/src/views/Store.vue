<template>
  <v-card class="overflow-hidden"
    height="100vh"
    flat
  >
    <v-sheet
      id="scrolling-techniques-7"
      color= "rgba(240, 240, 242, 1)"
      class="overflow-y-auto"
      height="100vh"
    >
      <v-toolbar
        dense
        flat
        height="80px"
        color="#F0F0F2"
      ></v-toolbar>
      <div class="text-center white--text" id="headingText">
        <p class="pt-3">{{ jewelType }}</p>
      </div>
      <v-container
        style="height: 1500px;"
        class="rgba(240, 240, 242, 1)"
      >
        <v-row
          no-gutters
          class="mt-10"
        >
          <v-col
            v-for="doc in dataa.docs"
            :key="doc"
            class="ml-3 mb-3"
          >
              <v-img
                :src="doc.image[0]"
                aspect-ratio="0.7619"
                width="256px"
                height="336px"
                @click="shopnowpage(doc.name)"
              >
                <v-app-bar
                  flat
                  color="rgba(0, 0, 0, 0)"
                >
                  <v-spacer></v-spacer>

                  <v-btn
                    title="add to cart"
                    class="cart--btn"
                    fab
                    dark
                    color="rgba(37, 24, 29, 1)"
                    @click="addToCart(doc)"
                  >
                    <v-icon dark>
                      mdi-cart
                    </v-icon>
                  </v-btn>
                </v-app-bar>
                
                <v-card-title>
                  <v-btn
                    class="buy--btn"
                    outlined
                    color="#25181D"
                  >
                    Rs {{ doc.retailPrice }}
                  </v-btn>
                </v-card-title>
              </v-img>
          </v-col>
        </v-row>
        <div class="text-center mt-5 mb-4">
          <v-pagination
            v-model="dataa.page"
            :length="length"
            circle
            :total-visible="total_visible"
            @input="getProducts"
          ></v-pagination>
        </div>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import CatalogServices from '../services/catalogServices'
import CartServices from '../services/cartServices'

export default {
  data : ()=>({
    cart: null,
    total_visible: null,
    dataa: {
      docs: null,
      total: null,
      limit: null,
      page: 1,
      pages: null ,
    },
    length: null,
    addedToCart: false
  }),
  computed: {
    jewelType: function () {
      return this.$route.params.item
    }
  },
  async mounted (){
    let jewelType = this.$route.params.item
    this.dataa = (await CatalogServices.index(jewelType, this.dataa.page)).data.data
    this.length = this.dataa.pages
    if (this.length >= 7) {
      this.total_visible = 5
    } else {
      this.total_visible = this.length;
    }
  },
  methods:{
    async getProducts(page){
      let jewelType = this.$route.params.item 
      this.dataa = (await CatalogServices.index(jewelType, page)).data.data
      this.length = this.dataa.pages
    },
    navigateTo(route){
      this.$router.push(route)
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
        }
      })
    },
    shopnowpage(name){
      if (!this.$store.state.isUserLoggedin) {
        this.$router.push({name:'login'})
      }
      this.navigateTo({name:'shopnow', params:{pname: name}})
    }
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
.buy--btn{
  margin-top: 210px;
  border-radius: 32px;
}
.cart--btn{
  opacity: 0.9;
}
</style>