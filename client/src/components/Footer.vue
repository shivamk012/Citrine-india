<template>


  <v-footer
    color="#3a3a3a"
    padless
    class="footer"
    fixed
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-btn
        v-for="icon in icons"
        :key="icon"
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
        {{ new Date().getFullYear() }} — <strong> @Citrine-India made by Rishi and Pulkit.</strong>
      </v-col>
    </v-row>
  </v-footer>


</template>



<script>


  export default {
    data: () => ({
        links: [
            'Team',
            'Contact Us',
        ],
        icons:[
            'mdi-facebook',
            'mdi-instagram',
        ]
    }),
  }


</script>



<style scoped>


  .footer {
    font-family: Montserrat;
  }

  .copyright {
    font-size: .75rem;
  }


</style>