<template>
  <div>
    <v-carousel
      height="764"
      :vertical="true"
      :reverse="true"
      :cycle="true"
      :show-arrows="false"
      :interval="5000"
      class="hidden-xs-only"
      hide-delimiters
    >
      <v-carousel-item
        v-for="i in 4"
        :key="i"
      >
        <v-container fill-height>
          <v-row align="center" justify="center">
            <v-col md="1"></v-col>
            <v-col md="5">
              <v-img aspect-ratio="1" class="top--img" :src="items[i-1]" width="280px" height="420px"></v-img>
              <v-img aspect-ratio="0.667" class="rounded-lg mid--img" :src="items[i]" width="280px" height="420px"></v-img>
              <v-img aspect-ratio="1" class="bottom--img" :src="items[i+1]" width="280px" height="420px"></v-img>
            </v-col>
            <v-col md="6">
              <div class="carousel--text">Touch of Modernity!</div>
              <div class="carousel--subtext">Our twist on Glam Rakhi’s with modern aesthetics and the beautiful motifs.
                Each of these slip effortlessly into your Bond of Love 💕 
              </div>
              <div class="mt-6">
                <v-btn
                  outlined
                  large
                  color="#FB9012"
                  @click="navigateTo({
                    name: 'collections'
                  })"
                >
                  See Collection
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <v-carousel
    height="764"
    :reverse="true"
    :cycle="true"
    :interval="15000"
    class="hidden-sm-and-up"
    hide-delimiters
  >
    <v-carousel-item
      v-for="i in 4"
      :key="i"
    >
      <v-container fill-height>
        <v-row align="center" justify="center" class="mb--margin-car">
          <v-col cols="3">
            <v-img aspect-ratio="0.75" class="left--img--mb" :src="items[i-1]" width="192px" height="256px"></v-img>
          </v-col>
          <v-col cols="6">
            <v-img aspect-ratio="0.75" class="rounded-lg" :src="items[i]" width="192px" height="256px"></v-img>
          </v-col>
          <v-col cols="3">
            <v-img aspect-ratio="0.75" class="right--img--mb" :src="items[i+1]" width="192px" height="256px"></v-img>
          </v-col>
        </v-row>
        <v-row class="mb-cara">
          <div class="carousel--text--mb">Touch of <br> Modernity!</div>
          <div class="carousel--subtext--mb">
            Our twist on Glam Rakhi’s with modern aesthetics and the beautiful motifs.
            Each of these slip effortlessly into your Bond of Love 💕 
          </div>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>

export default {
  data: () => ({
    items: [
      'https://img.buzzfeed.com/buzzfeed-static/static/2020-11/19/19/asset/b537877860a1/sub-buzz-15552-1605815483-5.jpg',
      'https://img.buzzfeed.com/buzzfeed-static/static/2020-11/19/19/asset/b537877860a1/sub-buzz-15552-1605815483-5.jpg',
      'https://img.buzzfeed.com/buzzfeed-static/static/2020-11/19/19/asset/b537877860a1/sub-buzz-15552-1605815483-5.jpg',
      'https://img.buzzfeed.com/buzzfeed-static/static/2020-11/19/19/asset/b537877860a1/sub-buzz-15552-1605815483-5.jpg',
      'https://img.buzzfeed.com/buzzfeed-static/static/2020-11/19/19/asset/b537877860a1/sub-buzz-15552-1605815483-5.jpg',
      'https://img.buzzfeed.com/buzzfeed-static/static/2020-11/19/19/asset/b537877860a1/sub-buzz-15552-1605815483-5.jpg',
    ],
  }),
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');

#top{
  margin-top: -100px;
}
.carousel--text{
  margin-top: -250px;
  font-family: 'Cormorant Garamond';
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: #25181D;
  text-shadow: 2px 2px 4px rgba(37, 24, 29, 0.25);
}
.top--img{
  margin-top: -300px;
  border-radius: 140px;
}
.mid--img{
  margin-top: 32px;
}
.bottom--img{
  margin-top: 32px;
  border-radius: 140px;
}
.carousel--subtext{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  margin-top: 18px;
}
.right--img--mb{
  border-top-left-radius: 90px;
  border-bottom-left-radius: 90px;
}
.left--img--mb{
  border-top-right-radius: 90px;
  border-bottom-right-radius: 90px;
}
.carousel--text--mb{
  font-family: 'Cormorant Garamond';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #25181D;
  text-shadow: 1px 1px 2px rgba(37, 24, 29, 0.15);
}
.carousel--subtext--mb{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #25181D;
  margin-top: 8px;
  text-shadow: 1px 1px 2px rgba(37, 24, 29, 0.15);
}
.mb-cara{
  margin-left: 10px;
  margin-right: 10px;
  margin-top: -190px;
}
</style>