<template>
  <nav>
    <v-toolbar
      color="black"
      dark
      fixed
      flat
      app
    >
      <v-toolbar-title 
          class="white--text logo" 
          @click="navigateTo({name:'home'})" 
        >
        CITRINE-INDIA
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="d-none d-sm-flex"
      >
        <v-btn
          
          v-if="!$store.state.isUserLoggedin"
          depressed flat
          color="black"
          class="white--text"
          @click="navigateTo({
            name: 'signUp'
          })"
        >
          Sign Up
        </v-btn>

        <v-btn
          depressed flat
          color="black"
          class="white--text"
          @click="navigateTo({
            name: 'catalog'
          })"
        >
          Catalog
        </v-btn>
        
        <v-menu
          open-on-hover
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              depressed flat
              color="black"
              class="white--text"
              v-on="on"
            >
              Collections
            </v-btn>
          </template>
          <v-list>
            <v-list-item three-line class="drop">
              <v-list-item-content>
                <v-list-item-title>Kids</v-list-item-title>
                <v-list-item-subtitle 
                  v-for="item in admins"
                  :key="item"
                  v-text="item"
                  @click="navigateTo({name:'login'})"
                >
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer vertical></v-spacer>
              <v-list-item-content>
                <v-list-item-title>Women</v-list-item-title>
                <v-list-item-subtitle 
                  v-for="item in cruds"
                  :key="item"
                  v-text="item"
                >
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer vertical></v-spacer>
              <v-list-item-content>
                <v-list-item-title>Men</v-list-item-title>
                <v-list-item-subtitle 
                  v-for="item in admins"
                  :key="item"
                  v-text="item"
                >
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          v-if="$store.state.isUserLoggedin"
          depressed
          color="black"
          @click="logout()"
        >
          Log Out 
        </v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedin"
          depressed
          color="black"
          @click="navigateTo({name:'login'})"
        >
          Login
        </v-btn>
        <v-btn
          v-if="$store.state.isAdmin"
          depressed
          color="black"
          @click="navigateTo({name:'adminHome'})"
        >
          Admin
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon
        @click="sideNav = !sideNav"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav" app class="d-lg-none d-xl-flex" right>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            @click="navigateTo({name:item.link})"
          >
            <v-list-item-title>
              <v-icon>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
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
    },
    data: () => ({
      sideNav: false,
      menuItems: [
        {icon:'mdi-folder-open',title:'Collections'},
        {icon:'mdi-account',title:'Profile'},
        {icon:'mdi-store',title:'Sign Up'},
        {icon:'mdi-account',title:'Sign In'},
      ],
      admins: ['Management','Settings'],
      cruds:['Create','Read','Update','Delete','mdi-delete'],
    })
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
.drop:hover {
  cursor: pointer;
}
</style>