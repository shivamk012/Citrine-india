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
      <p class="pt-3">Rakhi Category</p>
    </div>
    <v-container class="mt-16">
      <v-row>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/rakhi/CRA229.jpg"
            @click="navigateTo({name:'rakhistore', params:{item:'Bracelet'}})"
            aspect-ratio="0.7479"
            contain
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/rakhi/CRA221.jpg"
            @click="navigateTo({name:'rakhistore', params:{item:'Mauli'}})"
            aspect-ratio="0.7479"
            class="mt-4"
            contain
          ></v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/rakhi/CRA187.jpg"
            @click="navigateTo({name:'rakhistore', params:{item:'couple'}})"
            aspect-ratio="0.7479"
            contain
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/rakhi/CRA439.jpg"
            @click="navigateTo({name:'rakhistore', params:{item:'kundan'}})"
            aspect-ratio="0.7479"
            class="mt-4"
            contain
          >
          </v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/rakhi/CRA490.jpg"
            @click="navigateTo({name:'rakhistore', params:{item:'chuda'}})"
            aspect-ratio="0.7479"
            contain
          ></v-img>
          <v-img
            src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/rakhi/CRA1054.jpg"
            @click="navigateTo({name:'rakhistore', params:{item:'kids'}})"
            aspect-ratio="0.7479"
            class="mt-4"
            contain
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Montserrat', sans-serif;
  font-weight : 500 !important;
  height: 56px;
  font-size: 24px;
  line-height: 132%;
}
</style>