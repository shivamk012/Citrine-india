<template>
  <div class="home-collection">
    <!-- Testimolials -->
    <v-carousel
      height="700"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        aspect-ratio="2.88"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <!-- Quote -->
    <p v-scrollanimation class="quote">
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    </p>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
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
            </v-col>
            <v-col cols="12" sm="4">
              <v-card
                class="mx-auto rakhiTypes"
                max-width="300"
              >
                <v-img
                  src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/FrontC4.jpeg"
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
                  src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/ex.png"
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
            src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F7.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F5.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F4.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F3p.jpg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F2.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/F1.jpeg',
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

  .befor-enter{
    opacity:0;
    transform: translateY(100px);
    transition: all 3s ease-out;
  }

  .enter{
    opacity:1;
    transform: translateY(0px);
  }
</style>