<template>
  <div>
    <div class="text-center">
      <h1 class="hidden-sm-and-down heading--home">Jewellery</h1>
      <h1 class="hidden-md-and-up heading--home--mb">Jewellery</h1>
    </div>
    <v-container class="jewel--sec">
      <v-row>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-img
              src="https://www.kollamsupremeonline.com/17731-thickbox_default/elegant-matte-gold-plated-square-stone-sufi-necklace-set.jpg"
              contain
              class="change--cursor"
              @click="navigateTo({name:'store', params:{item:'necklace'}})"
            >
                <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Necklace</v-text>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
            </v-hover>
            <v-hover v-slot="{ hover }">
            <v-img
              src="https://www.e2ofashion.com/wp-content/uploads/2020/02/6284-1.jpg"
              aspect-ratio="1.282"
              class="mt-4 change--cursor"
              @click="navigateTo({name:'store', params:{item:'earing'}})"
            >
                <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Ear Rings</v-text>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
            </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }">
            <v-img
              src="https://cdn.shopify.com/s/files/1/2579/7674/products/Ana-Luisa-Jewelry-Rings-Gemstone-Ring-Oval-Stone-Ring-Mara-Turquoise-Gold.._1080x.jpg?v=1608215041"
              aspect-ratio="1.353"
              contain
              class="change--cursor"
              @click="navigateTo({name:'store', params:{item:'rings'}})"
            > 
              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Rings</v-text>
                  </v-overlay>
                </v-fade-transition>
            </v-img>
          </v-hover>
          <v-hover v-slot="{hover}">
            <v-img
              src="https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjEta2tZSmhhNlMuX1NMMTA1MF8uanBn.jpg"
              aspect-ratio="1"
              class="mt-4 change--cursor"
              @click="navigateTo({name:'store', params:{item:'handcuf'}})"
              contain
            >
              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Handcuffs</v-text>
                  </v-overlay>
                </v-fade-transition>
            </v-img>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <!-- <v-hover v-slot="{hover}">
            <v-img
              src="https://di2ponv0v5otw.cloudfront.net/posts/2018/06/07/5b190c02534ef91f8c1a5cb7/m_5b190c32aaa5b81de0f4dc9f.jpg"
              aspect-ratio="1.1"
              class="change--cursor"
              @click="navigateTo({name:'store', params:{item:'harness'}})"
              contain
            >
              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Harness</v-text>
                  </v-overlay>
                </v-fade-transition>
            </v-img>
          </v-hover> -->
          <v-hover v-slot="{hover}">
            <v-img
              src="https://imgcdn.floweraura.com/blue-marble-stone-dial-rakhi-9960247ra-A.jpg"
              aspect-ratio="1.235"
              class="mt-4 change--cursor"
              @click="navigateTo({name:'rakhi'})"
              contain
            >
              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#F0F0F2"
                  >
                    <v-text class="display-1" id="givecolor">Rakhi</v-text>
                  </v-overlay>
                </v-fade-transition>
            </v-img>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data : () => ({
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
    }),
    methods: {
      navigateTo(route) {
        this.$router.push(route)
      }
    }
  }
</script>  

<style scoped>
  #collections{
    font-family: 'Cormorant Garamond', serif;
  }
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
    color: rgba(240, 240, 242, 1) !important;
  }
  .heading--home{
    font-family: 'Cormorant Garamond', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 56px;
    line-height: 132%;
  }
  .heading--home--mb{
    font-family: 'Cormorant Garamond', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 132%;
  }
  .jewel--sec{
    margin-top: 88px;
  }
  #givecolor{
    color : #25181D !important;
    font-family: 'Cormorant Garamond', serif !important;
    font-weight : 500 !important;
  }

  .change--cursor{
    cursor: pointer !important;
  }
</style>