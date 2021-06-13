<template>
  <v-container
    style="height: 1500px;"
    class="grey lighten-5 mb-6"
  >
    <h1 class="text-center">Happy Grinding</h1>
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
          max-width="350"
          class="mx-auto"
        >
          <v-system-bar lights-out></v-system-bar>
          <v-carousel
            :continuous="false"
            :cycle="cycle"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="250"
          >
            <v-carousel-item
              v-for="(item, i) in doc.image"
              :key="i"
              :src="item"
            >
            </v-carousel-item>
          </v-carousel>
          <v-card-title>
            {{ doc.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ doc.retailPrice }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
              @click="navigateTo({name:'shopnow',params:{pname:doc.name}})"
            >
              Shop now
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              color="orange lighten-2"
              text
            >
              Add to cart
            </v-btn>
          </v-card-actions>
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
</template>

<script>
import CatalogServices from '../services/catalogServices'

export default {
  data : ()=>({
    data: {
      docs: null,
      total: null,
      limit: null,
      page: 1,
      pages: null ,
    },
    length: null,
  }),
  async mounted (){
    this.getProducts(this.data.page)
  },
  methods:{
    async getProducts(page){
      this.data = (await CatalogServices.index('',page)).data.data
      this.length = this.data.pages
    },
    navigateTo(route){
      this.$router.push(route)
    }
  }
}
</script>