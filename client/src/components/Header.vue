<template>


  <div class="header">

    <v-toolbar
      color="white"
      dark
      height="100px"
      fixed
      flat
    >
      <v-toolbar-title class="black--text logo">
        CITRINE-INDIA
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          depressed flat
          color="white"
          class="black--text"
          @click="navigateTo({
            name: 'signUp'
          })"
        >
          Sign Up
        </v-btn>
        <v-btn
          depressed flat
          color="white"
          class="black--text"
        >
          Browse
        </v-btn>
        <v-btn
          depressed light
          color="white"
        >
          Log Out 
        </v-btn>
        <v-btn
          depressed light
          color="white"
        >
          Log Out 
        </v-btn>
        <v-btn
          depressed light
          color="white"
        >
          Log Out 
        </v-btn>
        <v-btn
          depressed light
          color="white"
        >
          Log Out 
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
  </div>


</template>

<script>
  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
    }
  }
</script>




<style scoped>


  .header{
      font-family: Montserrat;
    }

  .logo{
    font-family: Ubuntu;
    font-size: 1.5rem;
  }


</style>