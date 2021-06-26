<template>
  <div>
    <v-app-bar app flat hide-on-scroll height="105px">
      <v-toolbar-title  id="title">Citrine-India</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
          open-on-hover
          offset-y
          max-width ="704px" 
          max-height="536px" 
            
        >   
            <template v-slot:activator="{ on }">
                <v-btn
                  plain
                  class="d-none d-sm-flex"
                  id="title-btn"
                  v-on="on"
                >
                  Trends
                </v-btn>
            </template>
            <v-list>
                <v-list-item two-line class="drop">
                <v-list-item-content>
                    <v-list-item-subtitle 
                        v-for="(item,i) in admins"
                        :key="i"
                        @click="navigateTo({name:'login'})"
                        >
                        <v-img :src="item" id="list-element" class="rounded-lg "  width="288px" height="88px"></v-img>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content>
                    <v-list-item-subtitle 
                        v-for="(item,i) in collections"
                        :key="i"
                    >
                         <v-img :src="item.src" id="list-element" class="rounded-lg" width="288px" height="88px"></v-img>
                    </v-list-item-subtitle>
                </v-list-item-content></v-list-item>
            </v-list>
        </v-menu>
      
        <v-menu
          open-on-hover
          offset-y
          max-width = "704px" 
          max-height="536px" 
        >   
            <template v-slot:activator="{ on }">
                <v-btn
                    id="title-btn"
                    class="d-none d-sm-flex"
                    plain
                    depressed
                    v-on="on"
                >
                    Collections
                </v-btn>
            </template>
            <v-list>
                <v-list-item two-line class="drop">
                <v-list-item-content>
                    <v-list-item-subtitle 
                        v-for="(item,i) in collections"
                        :key="i"
                        @click="navigateTo({name:'login'})"
                        >
                        <v-img id="list-element" :src="item.src" class="rounded-lg" max-width="288px" max-height="88px" aspect-ratio="3.27">>
                        <p class="display-1 text-center white--text">{{item.text}}</p></v-img>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content>
                    <v-list-item-subtitle 
                        v-for="(item,i) in collections"
                        :key="i"
                    >
                         <!-- <v-img :src="item" class="rounded-lg mt-1 mb-1" aspect-ratio="3.27"></v-img> -->
                        <v-img :src="item.src" id="list-element" class="rounded-lg" aspect-ratio="3.27" max-width="288px" max-height="88px">>
                        <p class="display-1 text-center white--text">{{item.text}}</p></v-img>
                    </v-list-item-subtitle>
                </v-list-item-content></v-list-item>
            </v-list>
        </v-menu>
        <v-menu
          open-on-hover
          offset-y
          max-width = "704px" 
          max-height="536px" 
          class="red"
        >   
            <template v-slot:activator="{ on }">
                <v-btn
                  id="title-btn"
                  plain
                  class="d-none d-sm-flex"
                  depressed
                  v-on="on"
                >
                  Jewelery
                </v-btn>
            </template>
            <v-list>
                <v-list-item two-line class="drop">
                <v-list-item-content>
                    <v-list-item-subtitle 
                        v-for="(item,i) in collections"
                        :key="i"
                        @click="navigateTo({name:'login'})"
                        >
                        <v-img :src="item.src" class="rounded-lg mt-1 mb-1" aspect-ratio="3.27" width="288px" height="88px">
                        <p class="white--text display-1 text-center">{{item.text}}</p></v-img>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content>
                    <v-list-item-subtitle 
                        v-for="(item,i) in collections"
                        :key="i"
                    >
                         <!-- <v-img :src="item" class="rounded-lg mt-1 mb-1" aspect-ratio="3.27"></v-img> -->
                        <v-img :src="item.src" class="rounded-lg mt-1 mb-1" aspect-ratio="3.27" width="288px" height="88px">
                        <p class="white--text display-1 text-center">{{item.text}}</p></v-img>
                    </v-list-item-subtitle>
                </v-list-item-content></v-list-item>
            </v-list>
        </v-menu>
      <v-text-field
        rounded
        class="mt-7 d-none d-sm-flex"
        prepend-inner-icon="mdi-magnify"
        filled
      ></v-text-field>
      <v-tab
        v-if="$store.state.isUserLoggedin"
        @click="navigateTo({
          name:'cart',
          params:{
            user:$store.state.user.name
          }
        })"
      >
        <v-badge
          color="#25181D"
          :content="cartBadge"
        >
          <v-icon>
            mdi-cart
          </v-icon>
        </v-badge>
      </v-tab>
      <v-app-bar-nav-icon
        @click="sideNav = !sideNav"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="sideNav" app class="d-flex .d-flex d-sm-none" color="rgba(37, 24, 29, 1)" right>
      <v-container>
        <v-row class="text-center mt-1 ml-3 ">
            <v-icon size="50px" color="rgba(240, 240, 242, 1)">mdi-account-circle-outline</v-icon>
            <p id="hellotext" >Hello bonker</p>
        </v-row>
      </v-container>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            @click="navigateTo({name:item.link})"
            id="changefont"
          >
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div class="text-center mt-10 " id="changefonttogara"><h1>Citrine</h1></div>
    </v-navigation-drawer>
  </div>
</template>

<script>

  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      logout(){
        this.$store.dispatch('logout')
        this.$router.push({name:'home'})
      }
    },
    data: () => ({
      sideNav: false,
      cartCount: null,
      menuItems: [
        {icon:'mdi-folder-open',title:'Home'},
        {icon:'mdi-account',title:'Your Account'},
        {icon:'mdi-store',title:'Sign Up'},
        {icon:'mdi-account',title:'Sign In'},
        {icon:'mdi-account',title: "Today's Deal"},
        {icon:'mdi-account',title:'Our Collection'},
        {icon:'mdi-account',title:'Trending'},
        {icon:'mdi-account',title:'About Us'},
      ],
      admins: [
          'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      ],
      collections:[
          {src:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',text:'rakhi'},
          {src:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',text:'rakhi'},
          {src:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',text:'rakhi'},
          {src:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',text:'rakhi'},
      ],
    }),
    watch: {
      '$store.state.cart': {
        immediate: true,
        async handler (value) {
          this.cartCount = value
        }
      }
    },
    computed:{
      cartBadge: function () {
        return this.$store.getters.cartItemCount
      }
    }
  }
</script>




<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  #title {
    font-family: 'Cormorant Garamond', serif;
    color: #25181D;
    font-size: 52px;
    letter-spacing: -.08em;
  }
  #title-btn {
    font-family: 'Cormorant Garamond', serif;
    color: #25181D;
    font-size: 20px;
  }
  .v-text-field{
    width: 10px;
  }

  #list-element{
    margin-right:10px;
    margin-top:10px;
    margin-left:10px;
  }

  #hellotext{
    margin-bottom: 16px;
    margin-top: 15px;
    margin-left: 10px;
    font-size: 25px;
    color:rgba(240, 240, 242, 1);
  }
  #changefont{
    font-family: 'Montserrat' , sans-serif;
    letter-spacing: 0.01em;
    font-size: 24px;
    line-height: 100%;
    margin-left: 15px;
    color:rgba(240, 240, 242, 1) !important;
  }

  #changefonttogara{
    font-family: 'Cormorant Garamond', serif;
    font-size:30px;
    letter-spacing: -0.08em;
    line-height: 133.7%;
    color:rgba(240, 240, 242, 1);
  }
/* .header{
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
} */
</style>