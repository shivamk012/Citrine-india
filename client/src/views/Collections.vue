<template>
  <v-card
    class="overflow-hidden"
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
        <p class="pt-3">COLLECTIONS</p>
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
            v-for="doc in data.docs"
            :key="doc"
            class="ml-3 mb-3"
          >
            <v-card
              elevation="4"
              width="216px"
              class="mx-auto"
              @click="navigateTo({
                name:'collectionType',
                params:{
                  cName: doc.name
                }
              })"
            >
              <v-img
                :src="doc.image"
                class="white--text align-end"
                height="288px"
                width="216px"
                aspect-ratio="0.75"
              >
                <v-card-title v-text="doc.name"></v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center mt-5">
          <v-pagination
            v-model="data.page"
            :length="length"
            circle
            @input="getProducts"
          ></v-pagination>
        </div>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import CollectionServices from '../services/collectionServices'
import CartServices from '../services/cartServices'

export default {
  data : ()=>({
    cart: null,
    data: {
      docs: null,
      total: null,
      limit: null,
      page: 1,
      pages: null ,
    },
    length: null,
    addedToCart: false
  }),
  async mounted (){
    this.getCollections(this.data.page)
  },
  methods:{
    async getCollections(page){
      this.data = (await CollectionServices.index('',page)).data.data
      this.length = this.data.pages
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
    }
  }
}
</script>

<style scoped>
#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Cormorant Garamond', serif !important;
  font-weight : 500 !important;
  height: 56px;
  font-size: 24px;
  line-height: 132%;
}
</style>