<template>
  <v-footer
    color = "rgba(240, 240, 242, 1)"
    padless
    class="footer"
  >
    <v-container>
      <v-row class="mb-10 pt-10">
        <v-col cols="2" md="1">
          <h1 class="display-3 text-center" id="heading">Citrine</h1>
        </v-col>
        <v-spacer></v-spacer> 
        <v-col cols="2" md="1">
          <v-card
            tile
            id="changecolor"
          >
          <v-container>
            <v-row>
              <v-col>
                <v-icon>mdi-google-plus</v-icon>
              </v-col>
              <v-col>
                <v-text>google</v-text>
              </v-col>
            </v-row>
          </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-divider dark="true"></v-divider>
      <!-- <div class="caption grey--text text-center" id="description"><p class="pt-10 mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro distinctio, sequi illum voluptas veniam alias exercitationem numquam quo, quos sed vitae dolorum consectetur reprehenderit architecto. Odit sunt facilis cum atque?</p></div> -->
      <!-- <v-row
        justify="center"
        no-gutters
        class="pt-10 mb-10"
      > -->
      <v-row class="mt-10">
        <v-btn
          v-for="k in 4"
          :key="k"
          text
          class="my-2 font-weight-bold"
          @click="navigateTo({name:`${keys[k-1].link}`})"
        >
          {{ keys[k-1].name }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          depressed
          color="black text-center"
          text
        >
          <v-row>
            <v-col >
              <v-icon size="30px">mdi-facebook</v-icon>
            </v-col>
            <v-col > 
              <v-text color="black">Facebook</v-text>
            </v-col>
          </v-row>
        </v-btn>
      </v-row>
      <v-row class="mt-5">
        <v-btn
          v-for="k in 3"
          :key="k"
          text
          class="my-2 font-weight-bold"
          @click="navigateTo({name:`${keys[k+3].link}`})"
        >
          {{ keys[k+3].name }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          depressed
          color="black text-center"
          text
        >
          <v-row>
            <v-col >
              <v-icon size="30px">mdi-instagram</v-icon>
            </v-col>
            <v-col > 
              <v-text color="black">Instagram</v-text>
            </v-col>
          </v-row>
        </v-btn>
      </v-row>
      <v-col
        class="#3a3a3a py-4 text-center copyright mt-10"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong> @Citrine-India made by Bonkers.</strong>
      </v-col>
    </v-container>
  </v-footer>
</template>



<script>
export default {
  data: () => ({
    keys: [
      {name: 'Jewellery', link:'team'},
      {name: 'Collections', link:'contactus'},
      {name:'Terms & Conditions', link:'tnc'},
      {name:'Deals', link:'tnc'},
      {name:'Treads', link:'tnc'},
      {name:'About', link:'tnc'},
      {name:'Join', link:'tnc'},
    ],
    icons:[
      'mdi-facebook',
      'mdi-twitter',
      'mdi-instagram',
    ]
  }),
  methods:{
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');

.footer {
  font-family: 'Montserrat',sans-serif;
  margin-top: 8%;
  padding-top: 3%;
  padding-bottom: 2%;
}
.copyright {
  font-size: .75rem;
}

#heading {
    font-family: 'Cormorant Garamond', serif !important;
}

#description{
  width: 50vw;
  margin-left : 15vw;
  font-size: 15px !important;
  letter-spacing: -0.231818px !important;
}

#changecolor{
  background-color :#EFEFF1 !important;
}
</style>