<template>
<v-container>
  <h1>Your cart</h1>
  <v-btn 
    elevation="2"
    large
    color = "white"
    class = "black--text"
    depressed
    @click = "navigateTo({name : 'home'})"
  ></v-btn>
  <v-simple-table class="mt-10">
    <template>
      <thead>
        <tr>
          <th class="text-left" v-for="item in headers" :key = "item.text" id="header-row">
            {{item.text}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in products"
          :key="item.name"
        >
          <td class="mb-3" style="height:100px;">
            <div class="mt-3 mb-3">
                <v-row class="mt-1">
                  <v-card
                    width="120"
                    flat
                  >
                      <v-img
                          :src = "item.src"
                          aspect-ratio = 1
                      ></v-img>
                  </v-card>
                  <v-card
                    width="150"
                    flat
                  >
                      <v-card-text>
                        <p class="grey--text text--darken-3">Item Name</p>
                        <v-btn
                            v-model = "selected"
                            small
                            color ="white"
                            class ="black--text"
                            depressed
                            elevation="2"
                            @click = deleteitem()
                        >Delete</v-btn>
                      </v-card-text>
                  </v-card>
                </v-row>
              </div>
          </td>
          <td style="height:100px;">{{ item.price }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</v-container>
</template>

<script>
// import CatalogServices from '../services/catalogServices'
export default {
  data () {
      return {
        selected: [],
        headers: [
          {
            text: 'Product',
            align: 'start',
            sortable: false,
            value: 'name',
            width : '500px',
          },
          { text: 'Price', value: 'price' , sortable:false },
          { text: 'Quantity', value: 'quantity' , sortable:false },
          { text: 'Total', value: 'total' , sortable:false },
        ],
        products: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            name: 'Item1',
            price: 100
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            name : 'Item2',
            price : 200
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            name : 'Item3',
            price : 300
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            name : 'Item4',
            price : 400
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            name : 'Item5',
            price : 500
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            name : 'Item6',
            price : 500
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            name : 'Item7',
            price : 500
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            name : 'Item8',
            price : 500
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            name : 'Item9',
            price : 500
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            name : 'Item10',
            price : 500
          },
        ],
      }
    },
    methods : {
      deleteitem() {
          this.selected.forEach((gg)=>{
              console.log(gg);
          });
           // this.selected.forEach(function(project) {
           // this.projects.splice(project, 1);
           //  });
      this.selected = [];
    }
  },
}
</script>

<style>

</style>
