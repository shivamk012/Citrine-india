<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <router-view></router-view>
      </main>
      <page-footer/>
    </v-app>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue';
import PageFooter from './components/Footer.vue';
import CartServices from './services/cartServices'

export default {
  name: 'App',

  components: {
    PageHeader,
    PageFooter,
  },

  data: () => ({
    //
  }),
  async mounted () {
    console.log('in')
    if (this.$store.state.isUserLoggedin){
      let cartActive = (await CartServices.isActive(this.$store.state.user._id)).data
      console.log(cartActive)
      if (!cartActive.active) {
        console.log('shold be none')
        this.$store.dispatch('setCart', [])
      }
    }
  }
};
</script>
