<template>
<div class="wholepage">
        <div class="xyz">
            <div class="photo">
              <div class="image">
                  <v-carousel hide-delimiters show-arrows-on-hover>
                        <v-carousel-item
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                        ></v-carousel-item>
                    </v-carousel>
            </div></div>
            <div class="details-photo">
              <span class="item-name"><h1>Aesthetic Red</h1></span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aut sed hic perferendis,.</p>
                <div class="cart">
                  <h6>MRP : <span>Rs X</span></h6>
                      <!-- <form action="post" class="addtocart">
                         <label class="pull-left qun">Quantity: </label>
                         <v-btn
                            @click="changequant({char : '-'})"
                            elevation="2"
                            tile
                            x-small
                            outlined
                         >-</v-btn>
                         <input type="number" name="click" id="quant" value=0>
                         <v-btn
                          @click="changequant({char : '+'})"
                          elevation="2"
                          tile
                          x-small
                          outlined
                         >+</v-btn>
                        <v-btn
                          color="orange lighten-1"
                          width="5%"
                          elevation="3"
                          raised
                          @click="navigateTo({name:'add'})"
                        >
                          Add To Cart
                        </v-btn>
                      </form> -->
                      <div class="buttons">
                        <div class="btn">
                        <v-btn
                          elevation="2"
                          outlined
                          block
                          >
                          Add to cart
                        </v-btn></div>
                        <div class="btn">
                        <v-btn
                          elevation="2"
                          color="black"
                          class="white--text"
                          block
                          >
                          Buy Now
                        </v-btn></div></div>
                </div>
            </div>
        </div>
        <div class="related-products">
            <h1>Related Products</h1>
            <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <v-card
                class="mx-auto rakhiTypes"
                max-width="300"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                  border-radius = "10%"
                  class="collection-img"
                ></v-img>

                <v-card-title>
                  Kids Rakhi
                </v-card-title>

                <v-card-subtitle>
                  A wide and wonderful range of collection.
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    color="orange lighten-2"
                    text
                    @click="navigateTo({name:'shopnow'})"
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
            </v-col></v-row></v-container></v-form>
        </div>
</div>
</template>

<script>
export default {
  data () {
      return {
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
      }
    },
    methods :{
      changequant(x){
        if(x.char === '-'){
            const field = document.querySelector('#quant');
            let x = parseInt(field.value);
            if(x != 0 ){
              console.log(typeof(x));
              x = x-1;
              field.value = x;
            }
        }
        else if(x.char === '+'){
          const field = document.querySelector('#quant');
          let x = parseInt(field.value);
          console.log(typeof(x));
          x = x+1;
          field.value = x;
        }
      }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap');
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
      width: 10%;
      border-bottom: 1px solid #000;
      border-top: 1px solid #000;
      text-align:center;
      height: 20px;
      }

  .wholepage {
      font-family: 'Montserrat', sans-serif;
    text-align: center;
    border-radius : 10%;
  }

  .xyz
  {
      margin-top : 5%;
      max-width: 80%;
      display: flex;
      margin-left: 10%;
      /* align-items: center; */
  }

  .item-name{
    font-family: 'Lora', serif;
    /* color : #201E1F; */
    /* color : #FAAA8D; */
    color : #393D3F;
  }

  .photo {
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image{
    max-width: 80%;
  }

  .details-photo{
      margin-bottom : 10%;
      font-size : 20px;
      font-weight: bold;
      /* line-height: 1.6;
      word-spacing: 5.5px; */
      text-align: justify;
  }

  .details-photo p{
    font-size: 16px;
  }

  .cart{
    padding-top:5%;
  }

  .cart h6{
    font-size: 25px;
  }

  .cart span{
    font-weight: 10%;
  }

  .buttons{
    margin-top: 10%;
    text-align: center;
  }

  .btn{
    padding-bottom: 10px;
  }

  .related-products{
      font-family: 'Montserrat', sans-serif;
      margin-left: 10%;
      text-align: justify;
      margin-bottom : 10%;
      font-size: 20px;
      font-weight: bold;
  }
</style>
