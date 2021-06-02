<template>
  <admin>
    <v-card class="overflow-hidden" height="100vh">
      <v-app-bar
        absolute
        color="white"
        hide-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        
        <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
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
              Create
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Product Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Product name*"
                      required
                      v-model="productDetail.productName"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Retail Price*"
                      hint="In Indian Rupees"
                      v-model="productDetail.retailPrice"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Wholesale Price*"
                      hint="In Indian Rupees"
                      v-model="productDetail.wPrice"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <div>
                      <li class="mt-2" v-for="item in productDetail.imageUrl" :key="item"></li>
                    </div>
                    <v-text-field
                      label="Image URL*"
                      :required="empty"
                      v-model="imageUrl"
                      append-outer-icon="mdi-plus"
                      @click:append-outer="push(imageUrl)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      :items="['Kids', 'Men', 'Women']"
                      label="Type*"
                      required
                      v-model="productDetail.catg"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-autocomplete
                      :items="mountedCollection"
                      label="Collection"
                      multiple
                      v-model="productDetail.mcollection"
                    ></v-autocomplete>
                    <v-text-field
                      label="New collection"
                      v-model="productDetail.mcollection"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save()"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

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
                      <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="600px"
                      >
                        <template v-slot:activator="{ on, attrs }">
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
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Product Profile</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                                >
                                  <v-text-field
                                    label="Product name*"
                                    required
                                    v-model="productDetail.productName"
                                  ></v-text-field>
                                </v-col>
                                <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                                >
                                  <v-text-field
                                    label="Retail Price*"
                                    hint="In Indian Rupees"
                                    v-model="productDetail.retailPrice"
                                  ></v-text-field>
                                </v-col>
                                <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                                >
                                  <v-text-field
                                    label="Wholesale Price*"
                                    hint="In Indian Rupees"
                                    v-model="productDetail.wPrice"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <div>
                                    <li class="mt-2" v-for="item in productDetail.imageUrl" :key="item">
                                      {{ item }}
                                      <v-icon
                                        @click="pullImage(item)"  
                                      >mdi-minus</v-icon> 
                                    </li>
                                  </div>
                                  <v-text-field
                                    label="Image URL*"
                                    :required="empty"
                                    v-model="imageUrl"
                                    append-outer-icon="mdi-plus"
                                    @click:append-outer="push(imageUrl)"
                                  ></v-text-field>
                                </v-col>
                                <v-col
                                  cols="12"
                                  sm="6"
                                >
                                  <v-select
                                    :items="['Kids', 'Men', 'Women']"
                                    label="Type*"
                                    required
                                    v-model="productDetail.catg"
                                  ></v-select>
                                </v-col>
                                <v-col
                                  cols="12"
                                  sm="6"
                                >
                                  <v-autocomplete
                                    :items="mountedCollection"
                                    label="Collection"
                                    multiple
                                    v-model="productDetail.mcollection"
                                  ></v-autocomplete>
                                  <v-text-field
                                    label="New collection"
                                    v-model="productDetail.mcollection"
                                    append-outer-icon="mdi-plus"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="save()"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
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
import CatalogServices from '../../services/catalogServices'

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
      async save () {
        console.log(this.productDetail)
        const response = (await CatalogServices.save(this.productDetail)).data
        if (response.success){
          alert('Product detail saved successfully :)')
        }
      },
      push (imageUrl) {
        this.productDetail.imageUrl.push(imageUrl)
        this.imageUrl = ''
        this.empty = false
        console.log('image url entered')
      },
      pullImage (item){
        this.productDetail.imageUrl.splice(this.productDetail.imageUrl.indexOf(item),1)
        if (this.productDetail.imageUrl == []) {
          this.empty = true
        }
      },
    },
    // async mounted () {
      
    // }
  }
</script>

<style scoped>

</style>