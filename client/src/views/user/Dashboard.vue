<template>
  <v-sheet
    color= "rgba(240, 240, 242, 1)"
  >
    <!-- toolbar to give extra space -->
    <v-toolbar
      dense
      flat
      height="80px"
      color="#F0F0F2"
    ></v-toolbar>
    <div class="text-center white--text" id="headingText">
      <p class="pt-3">MY ACCOUNT</p>
    </div>
    <v-container>
      <a @click="navigateTo({name:'home'})">
        <v-icon>
          mdi-chevron-left
        </v-icon>
        Continue Shopping
      </a>
      <v-row>
        <v-col
          md="4"
        >
          <v-card
            id="card"
            class="mt-10"
            color="rgba(240, 240, 242, 1)"
          >
            <v-card-title class="card--heading">My Orders</v-card-title>
            <v-divider id="divider"></v-divider>
            <v-card-actions>
              <v-row>
                <v-col>
                  <v-btn
                    depressed
                    block
                    color="rgba(240, 240, 242, 1)"
                    left
                    @click="navigateTo({name:'previousorders'})"
                  >
                    Previous Orders
                    <v-icon right>
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                  <v-btn
                    depressed
                    block
                    left
                    color="rgba(240, 240, 242, 1)"
                  >
                    Track Order
                    <v-icon right>
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
          <v-card
            id="card"
            class="mt-10"
            width="400"
            color="rgba(240, 240, 242, 1)"
          >
            <v-card-title class="card--heading">My Profile</v-card-title>
            <v-divider id="divider"></v-divider>
            <v-card-text>
              <p class="profile--text">
                {{ user.name }}
              </p>
              <p class="profile--text">
                {{ user.email }}
              </p>
              <p class="profile--text">
                Contact 
              </p>
            </v-card-text>
          </v-card>
          <v-btn
            class="mt-2 white--text logout--btn"
            color="#FB9012"
            @click="logout"
          >
            <v-icon id="icon">
              mdi-export
            </v-icon>
            Log Out
          </v-btn>
          <v-btn
            v-if="$store.state.isAdmin"
            outlined
            color="#FB9012"
            class="mt-2 ml-2"
            @click="navigateTo({name: 'adminHome'})"
          >
            Admin
          </v-btn>
        </v-col>
        <v-col md="8">
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  computed:{
    user: function () {
      console.log(this.$store.getters.getUser)
      return this.$store.getters.getUser;
    },
    contactInfo: function () {
      return this.$store.getters.contactInfo
    }
  },
  methods:{
    navigateTo(route){
      this.$router.push(route)
    },
    logout(){
      this.$store.dispatch('logout')
      this.$router.push({name:'home'})
    },
  },
  mounted () {
    if (!this.$store.state.isUserLoggedin) {
      this.$router.push({name:'login'})
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

#headingText{
  background-color:rgba(37, 24, 29, 1);
  font-family: 'Cormorant Garamond', serif !important;
  font-weight : 500 !important;
  height: 56px;
  font-size: 24px;
  line-height: 132%;
}
#card{
  border: 1px solid #FB9012 !important;
  box-shadow: 4px 8px 16px rgba(37, 24, 29, 0.15);
  border-radius: 8px;
}
#divider{
  border-color: #FB9012 !important;
}
#bg{
  background-color: rgba(240, 240, 242, 1);
}
#icon{
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  padding-left: -4px;
}
.card--heading{
  font-family: 'Montserrat', sans-serif;
  background: rgba(37, 24, 29, 0.03);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
}
.profile--text{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  color: #25181D
}
.logout--btn{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
}
</style>

