<template>
  <div>
    <div class="text-center">
      <h1 class="hidden-sm-and-down heading--home">Influencers</h1>
      <h1 class="hidden-md-and-up heading--home--mb">Influencers</h1>
    </div>
    <v-container>
      <v-row>
        <template >
          <v-col
            cols="12"
            md="4"
          >
              <v-card
                class="align-end"
                width="336px"
                height="640px"
                color="#f0f0f2"
                id="card"
              >
                <v-img
                  src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg"
                  aspect-ratio="0.525"
                  id="radii"
                >
                </v-img>
                <v-card
                  class="mx-auto"
                  flat
                  height="168px"
                  id="radii_below"
                >
                  <v-card-text>
                    <div class="text--primary">
                      relating to or dependent on charity; charitable.<br>
                      "an eleemosynary educational institution."<br>
                      "an eleemosynary educational institution."<br>
                      "an eleemosynary educational institution."
                    </div>
                  </v-card-text>
                </v-card>
              </v-card>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="card  align-end"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                width="336px"
                height="640px"
              >
                <v-img
                  src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg"
                  aspect-ratio="0.525"
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
          <v-col
            cols="12"
            md="4"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="card  align-end"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                width="336px"
                height="640px"
              >
                <v-img
                  src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg"
                  aspect-ratio="0.525"
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
</template>

<style scoped>
  /* .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  } */
  #card {
    /* transition: opacity .4s ease-in-out; */
    border-top-left-radius: 340px;
    border-bottom-right-radius: 340px;
  }

  /* .card:not(.on-hover) {
    opacity: 0.6;
  } */

  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
  #radii{
    border-top-left-radius: 340px;
    border-bottom-right-radius: 340px;
  }
  #radii_below{
    border-top-left-radius: 340px;
    border-bottom-right-radius: 340px;
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
</style>