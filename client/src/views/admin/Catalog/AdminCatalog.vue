<template>
  <admin>
    <v-card class="overflow-hidden" height="100vh">
      <v-app-bar
        absolute
        color="white"
        hide-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-btn
          color="white"
          depressed flat
          class="black--text"
          @click="navigateTo({name:'adminCreate'})"
        >
          <v-icon left>
            mdi-pencil
            flat
          </v-icon>
          Create
        </v-btn>
        <v-btn
          color="white"
          depressed flat
          class="black--text"
          @click="navigateTo({name:'newcollection'})"
        >
          <v-icon left>
            mdi-pencil
            flat
          </v-icon>
          New Collection
        </v-btn>

        <v-spacer></v-spacer>

        <admin-catalog-search>
        </admin-catalog-search>

      </v-app-bar>
      
      <admin-catalog-panel>
      </admin-catalog-panel>

    </v-card>
  </admin>
</template>

<script>
import AdminCatalogPanel from './AdminCatalogPanel.vue'
// import CatalogServices from '../../services/catalogServices'
import AdminCatalogSearch from './AdminCatalogSearch.vue'

  export default {
    components: { AdminCatalogSearch, AdminCatalogPanel },
    methods:{
      navigateTo(route){
        this.$router.push(route)
      }
    },
  }
</script>

<style scoped>

</style>