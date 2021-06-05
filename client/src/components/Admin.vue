<template>
  <v-card flat height="100vh">
  <v-divider></v-divider>
    <!-- <slot name="action"/> -->
    <v-row>
      <v-col
        cols="10"
      >
        <slot>No slot content defined</slot> 
      </v-col>
      <v-col
        cols="2"  
      >
        <v-navigation-drawer
          v-model="drawer"
          permanent
          right
          :mini-variant.sync="mini"
        >
          <template v-slot:prepend>
            <v-divider></v-divider>
            <v-list-item two-line>
              <v-list-item-avatar>
                <img v-bind:src="$store.state.user.imageUrl">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{$store.state.user.name}}</v-list-item-title>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
              </v-list-item-content>
              <v-btn
                icon
                @click.stop="mini = !mini"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
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
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city', name:'adminHome', subItems:[{title:'Mens'}, {title:'Mens'}]},
          { title: 'My Account', icon: 'mdi-account', name:'adminAccount', subItems:[{title:'Mens'}, {title:'Mens'}]},
          { title: 'Users', icon: 'mdi-account-group-outline', name:'adminUser', subItems:[{title:'Mens'}, {title:'Mens'}]},
          { title: 'Catalog', icon: 'mdi-folder-open', name:'adminCatalog', subItems:[{title:'Mens'}, {title:'Ladies'}, {title:'Kids'}]},
        ],
        mini:false,
      }
    },
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
    }
  }
</script>

<style scoped>

</style>
