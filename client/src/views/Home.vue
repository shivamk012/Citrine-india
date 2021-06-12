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
                height="400px"
                class="collection-img"
              ></v-img>
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
            <v-card
              class="mx-auto"
              max-width="344"
            >
                <v-img
                src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/FrontC4.jpeg"
                height="400px"
                class="collection-img"
                @click="reveal = true"
              ></v-img>

              <v-expand-transition>
                <v-card
                  v-if="reveal"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%;"
                >
                  <v-card-text class="pb-0">
                    <p class="text-h4 text--primary">
                      Origin
                    </p>
                    <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn
                      text
                      color="teal accent-4"
                      @click="reveal = false"
                    >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="pa-4 text-center">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <template v-for="(item, i) in items">
            <v-col
              :key="i"
              cols="12"
              md="4"
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  class="card  align-end"
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <v-img
                    :src="item.src"
                    height="400px"
                  >
                    <v-card-title class="text-h6 white--text">
                      <v-row
                        class="fill-height flex-column"
                        justify="space-between"
                      >

                        <div class="align-self-center">
                          <v-btn
                            v-for="(icon, index) in icons"
                            :key="index"
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                            icon
                          >
                            <v-icon
                              :class="{ 'show-btns': hover }"
                              :color="transparent"
                            >
                              {{ icon }}
                            </v-icon>
                          </v-btn>
                        </div>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>

  export default {

    data () {
      return {
        reveal: false,
        transparent: 'rgba(255, 255, 255, 0)',
        icons: ['mdi-heart', 'mdi-share-variant', 'mdi-shop'],
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

  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }
  .card {
    transition: opacity .4s ease-in-out;
  }

  .card:not(.on-hover) {
    opacity: 0.6;
  }

  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
</style>

