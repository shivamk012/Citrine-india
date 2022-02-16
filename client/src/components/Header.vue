<template>
  <div>
    <v-app-bar :color="bg" app flat hide-on-scroll height="104px">
      <v-toolbar-title  id="title" @click="navigateTo({name:'home'})" >Citrine</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        id="title-btn"
        class="hidden-sm-and-down"
        plain
        depressed
        @click="navigateTo({
          name: 'collections'
        })"
      >
        Deals
      </v-btn>
      <v-btn
        id="title-btn"
        class="hidden-sm-and-down"
        plain
        depressed
        @click="navigateTo({
          name: 'collections'
        })"
      >
        Collections
      </v-btn>
      <v-btn
        id="title-btn"
        plain
        class="hidden-sm-and-down"
        depressed
        @click="navigateTo({name:'jewelry'})"
      >
        Jewelery
      </v-btn>
      <v-btn
        icon
        class="hidden-sm-and-down"
        @click="routeChange('cart')"
      >
        <v-badge
          color="transparent"
          :content="cartBadge"
        >
          <v-icon>
            mdi-cart
          </v-icon>
        </v-badge>
      </v-btn>
      <v-btn
        icon
        class="hidden-sm-and-down"
        @click="navigateTo({name:'dashboard'})"
      >
        <v-icon>
          mdi-account
        </v-icon>
      </v-btn>
      <v-app-bar-nav-icon
        @click="sideNav = !sideNav"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- rgba(37, 24, 29, 1) -->
    <v-navigation-drawer v-model="sideNav" app class="d-flex .d-flex d-sm-none" color="#25181D" right>
      <v-list class="mt-10">
        <v-list-item class="text-center">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-icon color="#F0F0F2" style="font-size: 50px;">mdi-account-circle</v-icon> 
            <v-text class="text-h5" id="changefont">Hello</v-text>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
        <v-list-item-group>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            @click="routeChange(item.link)"
            id="changefont"
          >
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div class="text-center mt-10 text-h3" id="changefonttogara">Citrine</div>
    </v-navigation-drawer>
  </div>
</template>

<script>

  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      changeColor() {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          this.bg = '#F0F0F2';
        } else {
          this.bg = 'transparent';
        }
      },
      routeChange(routeName) {
        if (routeName == 'cart') {
          if (!this.$store.state.isUserLoggedin) {
            this.navigateTo({name: 'login'})
          } else {
            this.navigateTo({
              name: 'cart',
              params:{
                user: this.$store.state.user.name
              }
            })
          }
        } else {
          this.navigateTo({name: routeName})
        }
      }
    },
    data: () => ({
      bg:null,
      sideNav: false,
      cartCount: null,
      menuItems: [
        {icon:'mdi-folder-open',title:'Home',link:"home"},
        {icon:'mdi-account',title:'Account',link:"dashboard"},
        {icon:'mdi-store',title:'Your Cart',link:"cart"},
        {icon:'mdi-account',title: "Our Collections",link:"collections"},
        {icon:'mdi-account',title:'Jewellery',link:"jewelry"},
        {icon:'mdi-account',title:'About Us',link:"about"},
      ],
       admins: [
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      ],
      cruds:['Create','Read','Update','Delete','mdi-delete'],
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
    },
    mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
  #title {
    font-family: 'Cormorant Garamond', serif;
    color: #25181D;
    font-size: 52px;
    letter-spacing: -.06em;
  }
  #title:hover{
    cursor: pointer;
  }
  #title-btn {
    font-family: 'Cormorant Garamond', serif;
    color: #25181D;
    font-size: 20px;
  }
  .v-text-field{
    width: 10px;
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
    color:#F0F0F2 !important;
  }
  #changefonttogara{
    font-family: 'Cormorant Garamond', serif !important;
    font-size:25px;
    letter-spacing: -0.08em;
    line-height: 133.7%;
    color:#F0F0F2 !important;
  }
  #changefontcolor{
    color : rgba(251, 144, 18, 1) !important;
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