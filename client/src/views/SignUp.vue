<template>
  <v-card
    class="mx-auto"
    width="344"
  >
    <v-card-text centered>
      <!-- <div>Word of the Day</div> -->
      <p class="display-1 text--primary">
        Sign In
      </p>
      <v-text-field
        label="Email Address"
        outlined
        ></v-text-field>
      <v-text-field
        label="Password"
        outlined
        ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn
        block
        color="success"
        dark
        class="p-t-n4"
      >
        Sign In
      </v-btn>
    </v-card-actions>
    <div class="text-center">
      <v-btn
        color="#000"
        class="ma-2 white--text"
        @click.prevent="loginWithGoogle"
      >
        <v-icon
          right
          dark
          class="pr-7"
        >
          mdi-google
        </v-icon>
         Google
      </v-btn>
      <div>
        <p>Alerady have a account? </p>
        <a @click="navigateTo({name:'login'})">Login</a>
      </div>
    </div>
  </v-card>
</template>

<script>
import AuthenticationServices from '../services/authenticationServics'

export default {
  name: 'login_signup_social',
  methods: {
    loginWithGoogle () {
      this.$gAuth
        .signIn()
        .then(async (GoogleUser) => {
          // on success do something
          const id_token = GoogleUser.getAuthResponse().id_token;
          const response = (await AuthenticationServices.register(id_token)).data;
          this.$store.dispatch('setToken', response.token)
          this.$store.dispatch('setUser', response.user)
          this.$router.push({name:'home'})
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    navigateTo(route){
      this.$router.push(route)
    }
  },
  data () {
    return {
      loading3: true,
    }
  },
}

</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.signin {
  margin-bottom: -50px;
  padding-bottom: 10px;
}
.ortext {
  font-size: .75rem;
}
</style>

