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
    if (this.$store.state.isUserLoggedin){
      let activeCart = (await CartServices.getActive(this.$store.state.user._id)).data
      this.$store.dispatch('setCart', activeCart)
    }
  }
};
</script>
