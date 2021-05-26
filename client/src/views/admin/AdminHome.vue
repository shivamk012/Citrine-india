<template>
  <v-card height="600px">
    <v-navigation-drawer
      absolute
      permanent
      right
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="navigateTo({
            name: item.name
          })"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-city', name:'adminHome'},
          { title: 'My Account', icon: 'mdi-account', name:'adminAccount'},
          { title: 'Users', icon: 'mdi-account-group-outline', name:'adminUser'},
          { title: 'Catalog', icon: 'mdi-folder-open', name:'adminCatalog'},
        ],
      }
    },
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
    }
  }
</script>
