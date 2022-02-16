<template>
  <v-sheet
    color= "rgba(240, 240, 242, 1)"
  >
    <!-- toolbar to give extra space -->
    <v-toolbar
      dense
      flat
      height="80px"
      color="#F0F0F2"
    ></v-toolbar>
    <div class="text-center white--text" id="headingText">
      <p class="pt-3">YOUR CART</p>
    </div>
    <v-container v-if="$store.state.cart === []">
      <v-img src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/emptyCart.png"></v-img>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col
          cols="12"
          md="8"
        >
          <v-simple-table class="mt-10 elevation-2">
            <template>
              <thead>
                <tr>
                  <th id="tableHead" class="#25181D--text" v-for="item in headers" :key="item.text">
                    {{item.text}}
                  </th>
                </tr>
              </thead>
              <tbody id="tableBody">
                <tr
                  v-for="item in cartItems"
                  :key="item.product._id"
                >
                  <td class="mb-3" style="height:100px;">
                    <div class="mt-3 mb-3">
                      <v-row class="mt-1">
                        <v-col cols="12" md="6">
                          <v-card
                            width="120"
                            flat
                            class="mb-3"
                          >
                            <v-img
                              :src ="item.product.image[0]"
                              aspect-ratio = 1
                            ></v-img>
                          </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-card
                            width="120"
                            flat
                            color="rgba(240, 240, 242, 1)"
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
                        </v-col>
                      </v-row>
                    </div>
                  </td>
                  <td v-if="$store.state.user.role !== 'customer'">{{ item.product.wholesalePrice }}</td>
                  <td v-else>{{ item.product.retailPrice }}</td>
                  <td>
                    <v-text-field
                      rounded
                      dense
                      v-model="item.quantity"
                      class="text-center "
                      @change="quantityChange(item.product._id, item.quantity)"
                      outlined
                    >
                    </v-text-field>
                  </td>
                  <td v-if="$store.state.user.role === 'wholesaler'">{{ item.product.wholesalePrice*item.quantity }}</td>
                  <td v-else>{{ item.product.retailPrice*item.quantity }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-container>
            <v-card
              id="totalCalc"
              class="elevation-1 mt-10"
              width="400"
              color="rgba(240, 240, 242, 1)"
            >
              <v-card-title class="text-h5">Order Summary</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-row class="text-center">
                  <v-col
                    cols="6"
                  >
                    Subtotal
                  </v-col>
                  <v-col cols="6">
                    <v-icon>
                      mdi-CurrencyInr
                    </v-icon>
                    {{ cartTotal.totalPrice }}
                  </v-col>
                </v-row>
                <v-row class="text-center">
                  <v-col
                    cols="6"
                  >
                    Shipping
                  </v-col>
                  <v-col cols="6">
                    FREE
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text>
                <v-row class="text-center text-h5">
                  <v-col
                    cols="6"
                  >
                    Total
                  </v-col>
                  <v-col cols="6">
                    {{ cartTotal.totalPrice }}
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <v-card
              id="totalCalc"
              class="elevation-1 mt-2"
              width="400"
              color="rgba(240, 240, 242, 1)"
            >
              <v-btn
                elevation="2"
                color="#FB9012"
                block
                x-large
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
            </v-card>
            <a>
              <v-icon>
                mdi-chevron-left
              </v-icon>
              Continue Shopping
            </a>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
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
    },
    cartTotal: function () {
      return this.$store.getters.cartTotal
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Cormorant Garamond', serif !important;
  font-weight : 500 !important;
  height: 56px;
  font-size: 24px;
  line-height: 132%;
}
#tableHead{
  background-color: rgba(240, 240, 242, 1);
  color: #25181D;
  font-family: 'Montserrat', sans-serif;
  font-size: 21px;
}
#tableBody{
  background-color: rgba(240, 240, 242, 1);
  color: #25181D;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
}
.v-text-field{
  width: 125px;
  margin-top: 22px;
}
#totalCalc{
  font-family: 'Montserrat', sans-serif;
}
.v-btn{
  font-family: 'Montserrat', sans-serif;
}
</style>
