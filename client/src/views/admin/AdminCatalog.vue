<template>
  <admin>
    <v-card class="overflow-hidden" height="100vh">
      <v-app-bar
        absolute
        color="white"
        hide-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        
        <v-btn
          color="white"
          depressed flat
          class="black--text"
          @click="navigateTo({name:'adminCreate'})"
        >
          <v-icon left>
            mdi-pencil
            flat
          </v-icon>
          Create
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          depressed flat
          color="white"
          class="black--text"
        >
          Mens
        </v-btn>

        <v-btn
          depressed flat
          color="white"
          class="black--text"
        >
          Kids
        </v-btn>

        <v-btn
          depressed flat
          color="white"
          class="black--text"
        >
          Womens
        </v-btn>

        <v-btn
          depressed flat
          color="white"
          class="black--text"
        >
          Collections
        </v-btn>
      </v-app-bar>
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
              v-for="n in 4"
              :key="n"
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
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                  >
                  </v-carousel-item>
                </v-carousel>
                <v-list two-line>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title v-model="productDetail.productName">{{ productDetail.productName }}</v-list-item-title>
                      <v-list-item-subtitle>Retail {{ productDetail.retailPrice }} -- Wholesale {{ productDetail.wPrice }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn
                        color="white"
                        depressed flat
                        class="black--text"
                        v-bind="attrs"
                        v-on="on"
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
              v-model="page"
              :length="15"
              :total-visible="7"
            ></v-pagination>
          </div>
        </v-container>
      </v-sheet>
    </v-card>
  </admin>
</template>

<script>
// import CatalogServices from '../../services/catalogServices'

  export default {
    data: () => ({
      dialog: false,
      imageUrl:'',
      collection:'',
      mountedCollection: [],
      productDetail:{
        productName: '',
        retailPrice: '',
        wPrice: '',
        imageUrl: [],
        mcollection: '',
        catg: '',
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
      page: 1,
      empty: true,
    }),
    methods:{
      navigateTo(route){
        this.$router.push(route)
      }
    }
  }
</script>

<style scoped>

</style>