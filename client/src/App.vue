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
import PageHeader from './components/Header2.vue';
import PageFooter from './components/Footer2.vue';
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
      let cartActive = (await CartServices.isActive(this.$store.state.user._id)).data
      if (!cartActive.active) {
        this.$store.dispatch('setCart', [])
      }
    }
  }
};
</script>
