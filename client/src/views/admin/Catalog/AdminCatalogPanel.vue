<template>
  <v-sheet
    id="scrolling-techniques-7"
    class="overflow-y-auto"
    height="100vh"
  >
    <p>something here</p> <!-- If something is written here than only H1 tag works -->
    <!-- For content in empty space use v-container -->
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
            <v-list two-line>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ doc.name }}</v-list-item-title>
                  <v-list-item-subtitle>Retail {{ doc.retailPrice }} -- Wholesale {{ doc.wholesalePrice }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn
                    color="white"
                    depressed flat
                    class="black--text"
                    v-bind="attrs"
                    v-on="on"
                    @click="navigateTo({name:'adminCatalogEdit',params:{productId:doc._id}})"
                  >
                    <v-icon left>
                      mdi-pencil
                      flat
                    </v-icon>
                    Edit
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
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
</template>

<script>
import CatalogServices from '../../../services/catalogServices'

export default {
  data: () => ({
    dialog: false,
    data: {
      docs: null,
      total: null,
      limit: null,
      page: 1,
      pages: null ,
    },
    cycle: false,
    items: [
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
    ],
    empty: true,
    length: null,
    sValue: null,
  }),
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.sValue = value
        this.getProducts(this.data.page)
      }
    }
  },
  methods:{
    async getProducts (page) {
      this.data = (await CatalogServices.index(this.sValue, page)).data.data
      console.log(this.data)
      this.length = this.data.pages
      
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
