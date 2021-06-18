<template>
  <v-container>
    <h1>Your cart</h1>
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
            v-for="item in cartItems"
            :key="item.product._id"
          >
            <td class="mb-3" style="height:100px;">
              <div class="mt-3 mb-3">
                <v-row class="mt-1">
                  <v-card
                    width="120"
                    flat
                  >
                    <v-img
                      :src ="item.product.image[0]"
                      aspect-ratio = 1
                    ></v-img>
                  </v-card>
                  <v-card
                    width="150"
                    flat
                  >
                      <v-card-text>
                        <p class="grey--text text--darken-3">{{ item.product.name }}</p>
                        <v-btn
                            v-model = "selected"
                            small
                            color ="white"
                            class ="black--text"
                            depressed
                            elevation="2"
                            @click.prevent="removeItem(item.product)"
                        >Delete</v-btn>
                      </v-card-text>
                  </v-card>
                </v-row>
              </div>
            </td>
            <td>{{ item.product.retailPrice }}</td>
            <td>
              <v-text-field
                v-model="item.quantity"
                class="text-center"
                @change="quantityChange(item.product._id, item.quantity)"
                outlined
              >
              </v-text-field>
            </td>
            <td>{{ item.product.retailPrice*item.quantity }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn
      elevation="2"
      color="black"
      class="white--text mt-3"
      @click="navigateTo({
        name:'contactInfo',
        params:{
          name: $store.state.user.name
        }
      })"
      >
      Buy Now
    </v-btn>
  </v-container>
</template>

<script>
import CartServices from '../services/cartServices';
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
      cart: null
    }
  },
  methods : {
    async removeItem(product) {
      this.$store.dispatch('removeProductFromCart', product)
      await CartServices.delete(product._id,this.$store.state.user._id)
    },
    navigateTo (route) {
      this.$router.push(route)
    },
    async quantityChange (_id, quantity) {
      this.$store.dispatch('quantityChange',{_id, quantity})
      await CartServices.quantityChange({productId:_id, quantity, customer:this.$store.state.user._id})
    }
  },
  computed: {
    cartItems: function () {
      return this.$store.state.cart
    }
  }
}
</script>

<style scoped>
.v-text-field{
  width: 50px;
}
</style>
