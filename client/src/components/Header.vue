<template>
  <div>
    <v-toolbar
      color="#f2eecb"
      dark
      fixed
      flat
    >
      <v-toolbar-title class="black--text logo">
        CITRINE-INDIA
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedin"
          depressed flat
          color="#f2eecb"
          class="black--text"
          @click="navigateTo({
            name: 'signUp'
          })"
        >
          Sign Up
        </v-btn>
        <v-btn
          depressed flat
          color="#f2eecb"
          class="black--text"
        >
          Browse
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedin"
          depressed light
          color="#f2eecb"
          @click="logout()"
        >
          Log Out 
        </v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedin"
          depressed light
          color="#f2eecb"
          @click="navigateTo({name:'login'})"
        >
          Login
        </v-btn>
        <v-btn
          v-if="$store.state.isAdmin"
          depressed light
          color="#f2eecb"
          @click="navigateTo({name:'adminHome'})"
        >
          Admin
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
      logout(){
        this.$router.push({name:'home'})
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
      }
    }
  }
</script>




<style scoped>
.header{
  font-family: Montserrat;
  margin-bottom: 2%;
  margin-left: 3%;
  margin-right: 3%;
}
.logo{
  font-family: Ubuntu;
  font-size: 1.5rem;
}
.nav-items-home {
  text-decoration: underline;
}
.nav-items:hover {
  text-decoration: underline;
}
</style>