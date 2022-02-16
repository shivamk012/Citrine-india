<template>
  <v-sheet
    color= "rgba(240, 240, 242, 1)"
  >
    <v-toolbar
      dense
      flat
      height="80px"
      color="#F0F0F2"
    ></v-toolbar>
    <div class="text-center white--text" id="headingText">
      <p class="pt-3">JEWELERY</p>
    </div>
    <v-container class="mt-16">
      <v-row>
        <v-col cols="12" sm="4">
          <v-img
            src="https://www.kollamsupremeonline.com/17731-thickbox_default/elegant-matte-gold-plated-square-stone-sufi-necklace-set.jpg"
            @click="navigateTo({name:'store', params:{item:'necklace'}})"
            aspect-ratio="0.7479"
          ></v-img>
          <v-img
            src="https://www.e2ofashion.com/wp-content/uploads/2020/02/6284-1.jpg"
            @click="navigateTo({name:'store', params:{item:'earing'}})"
            aspect-ratio="0.7479"
            class="mt-4"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="https://cdn.shopify.com/s/files/1/2579/7674/products/Ana-Luisa-Jewelry-Rings-Gemstone-Ring-Oval-Stone-Ring-Mara-Turquoise-Gold.._1080x.jpg?v=1608215041"
            @click="navigateTo({name:'store', params:{item:'rings'}})"
            aspect-ratio="0.7479"
          ></v-img>
          <v-img
            src="https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjEta2tZSmhhNlMuX1NMMTA1MF8uanBn.jpg"
            @click="navigateTo({name:'store', params:{item:'handcuf'}})"
            aspect-ratio="0.7479"
            class="mt-4"
          >
          </v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="https://di2ponv0v5otw.cloudfront.net/posts/2018/06/07/5b190c02534ef91f8c1a5cb7/m_5b190c32aaa5b81de0f4dc9f.jpg"
            @click="navigateTo({name:'store', params:{item:'harness'}})"
            aspect-ratio="0.7479"
          ></v-img>
          <v-img
            src="https://imgcdn.floweraura.com/blue-marble-stone-dial-rakhi-9960247ra-A.jpg"
            @click="navigateTo({name:'rakhi'})"
            aspect-ratio="0.7479"
            class="mt-4"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  methods: {
    navigateTo(route){
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Cormorant Garamond', serif !important;
  font-weight : 500 !important;
  height: 56px;
  font-size: 24px;
  line-height: 132%;
  margin-top: 24px;
}
</style>