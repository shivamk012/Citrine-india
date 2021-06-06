<template>
<<<<<<< HEAD
  <div class="home-collection">
    <!-- Testimolials -->
    <v-carousel>
=======
  <div>
    <!-- Testimolials -->
    <v-carousel class="caroBlock">
>>>>>>> 99d8df991f641479d7acd798ff4cdba1d6b921d6
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <!-- Quote -->
    <p class="quote">
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    </p>
<<<<<<< HEAD
=======
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
>>>>>>> 99d8df991f641479d7acd798ff4cdba1d6b921d6
    <!-- Collection-starts -->
    <div class="collections">
      <h2>OUR COLLECTION</h2>
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
<<<<<<< HEAD
                    @click="navigateTo({name:'shopnow'})"
=======
>>>>>>> 99d8df991f641479d7acd798ff4cdba1d6b921d6
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
            <v-col cols="12" sm="4">
              <v-card
                class="mx-auto rakhiTypes"
                max-width="300"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                  class="collection-img"
                ></v-img>

                <v-card-title>
                  Ladies Rakhi
                </v-card-title>

                <v-card-subtitle>
                  A wide and wonderful range of collection.
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    color="orange lighten-2"
                    text
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
            <v-col cols="12" sm="4">
              <v-card
                class="mx-auto rakhiTypes"
                max-width="300"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                  class="collection-img"
                ></v-img>

                <v-card-title>
                  Gents Rakhi
                </v-card-title>

                <v-card-subtitle>
                  A wide and wonderful range of collection.
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    color="orange lighten-2"
                    text
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
        </v-container>
      </v-form>
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
      navigateTo(route){
        this.$router.push(route);
      }
    }
  }
</script>

<style scoped>
<<<<<<< HEAD
  .home-collection {
    font-family: Montserrat;
  }
  .quote {
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    padding-top: 6%;
    padding-bottom: 3%;
  }
  .collections {
    margin-top: 100px;
  }
  .collections h2{
    text-align: center;
  }
  .rakhiTypes {
    margin-bottom: 15%;
    margin-top: 15%;
  }
=======
.home-collection {
  font-family: Montserrat;
}
.quote {
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  padding-top: 6%;
  padding-bottom: 3%;
}
.collections {
  margin-top: 100px;
}
.collections h2{
  text-align: center;
}
.rakhiTypes {
  margin-bottom: 15%;
  margin-top: 15%;
}
.caroBlock{
  position: relative;
}
>>>>>>> 99d8df991f641479d7acd798ff4cdba1d6b921d6
</style>