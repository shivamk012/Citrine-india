<template>
  <admin>
    <v-card class="overflow-hidden" height="100vh">
      <v-app-bar
        absolute
        color="white"
        hide-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        
        <!-- <v-btn
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
        </v-btn> -->

        <v-spacer></v-spacer>

        <admin-user-search>
        </admin-user-search>

      </v-app-bar>
      
      <admin-user-panel>
      </admin-user-panel>

    </v-card>
  </admin>
</template>

<script>
import AdminUserSearch from './AdminUserSearch.vue'
import AdminUserPanel from './AdminUserPanel.vue'

export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  components:{
    AdminUserSearch,
    AdminUserPanel,
  }
}
</script>

<style scoped>
  .text-section {
    font-family: Montserrat;
  }
</style>