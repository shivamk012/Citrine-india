<template>
  <div>
    <v-container>
      <h2 class="text-center mt-4">Title</h2>
      <v-divider></v-divider>
    </v-container>
    <v-container class="mt-6">
      <v-row>
        <v-col>
          <v-card
            class="mx-auto"
            max-width="425"
            flat
          >
            <v-carousel
              :continuous="false"
              :cycle="cycle"
              :show-arrows="false"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
              height="300"
            >
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              >
              </v-carousel-item>
            </v-carousel>
          </v-card>
          <v-card
            class="mx-auto"
            max-width="425"
            flat
          >
            <v-card-text>
              <p class="text-h3 grey--text text--darken-3">Colour Lush</p>
              <p class="text-h5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sed hic perferendis,.
              </p>
              <p class="text-h6">MRP : <span>Rs X</span></p>
              <v-btn
                elevation="2"
                outlined
                block
                >
                Add to cart
              </v-btn>
              <v-btn
                elevation="2"
                color="black"
                class="white--text mt-3"
                block
                >
                Buy Now
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
}
</script>

<style scoped>
</style>
