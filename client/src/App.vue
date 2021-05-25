<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue';

export default {
  name: 'App',

  components: {
    PageHeader,
  },

  data: () => ({
    //
  }),
};
</script>
