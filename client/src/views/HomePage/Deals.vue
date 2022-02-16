<template>
  <div>
    <div class="text-center">
      <h1 class="hidden-sm-and-down heading--home">Deals</h1>
      <h1 class="hidden-md-and-up heading--home--mb">Deals</h1>
    </div>
    <v-sheet
      class="hidden-xs-only"
    >
      
    </v-sheet>
    <v-sheet
      class="mx-auto hidden-sm-and-up"
      max-width="800"
      color="rgba(240, 240, 242, 1)"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="ma-4"
            height="200"
            width="100"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>

<style scoped>
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