<template>
  <div>
    <v-container>
      <h2 class="text-center mt-4 mb-4">Title</h2>
      <v-divider></v-divider>
    </v-container>
    <v-container class="mt-12">
      <v-row class="mt-2">
        <v-card
          class="mx-auto"
          width="450"
          flat
        >
          <v-carousel
            :continuous="false"
            :cycle="cycle"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="400"
            width="450"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              contain
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
        <v-card
          class="mx-auto"
          width="450"
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
            <v-btn
              color="white"
              class="black--text mt-3 mr-3"
              >
              Share
            </v-btn>
            <v-btn
              color="white"
              class="black--text mt-3"
              >
              Share
            </v-btn>
          </v-card-text>
        </v-card>
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
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/FrontC4.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/FrontC2.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/FrontC3.jpeg',
          },
          {
            src: 'https://citrine-india-site.s3.ap-south-1.amazonaws.com/ex.png',
          },
        ],
      }
    },

    methods : {
       navigateTo(route)
       {
         this.$router.push(route);
       }
    }
}
</script>

<style scoped>
</style>
