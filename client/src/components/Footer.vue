<template>
  <v-footer
    color="#3a3a3a"
    padless
    class="footer"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="(key,k) in keys"
        :key="k"
        color="white"
        text
        class="my-2"
        @click="navigateTo({name:`${key.link}`})"
      >
        {{ key.name }}
      </v-btn>
      <v-btn
        v-for="(icon,i) in icons"
        :key="i"
        color="white"
        text
        class="my-2"
      >
        <v-icon size="24px">
            {{ icon }}
        </v-icon>
      </v-btn>
      <v-col
        class="#3a3a3a py-4 text-center white--text copyright"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong> @Citrine-India made by Rishi and Shivam.</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>



<script>
export default {
  data: () => ({
    keys: [
      {name: 'Team', link:'team'},
      {name: 'Contact Us', link:'contactus'},
      {name:'Terms & Conditions', link:'tnc'},
      {name:'Shipping And Returns', link:'shipnreturn'},
    ],
    icons:[
      'mdi-facebook',
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
.footer {
  font-family: Montserrat;
  margin-top: 8%;
  padding-top: 3%;
  padding-bottom: 2%;
}
.copyright {
  font-size: .75rem;
}
</style>