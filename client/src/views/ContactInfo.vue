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
    <div class="text-center white--text" id="headingtext">
      <p class="pt-3">CONTACT INFORMATION</p>
    </div>
    <v-container>
      <v-row class="mt-9">
        <v-col
          md="4"
        >
          <h3 class="font-weight-medium">Your Name</h3>
          <v-text-field  
            outlined
            dense
            v-model="user.name"
            id="text-field-border"
            readonly
          ></v-text-field>
        </v-col>
        <v-col
          md="4"
        >
          <h3 class=" font-weight-medium">Contact Number</h3>
          <v-text-field
            v-model="contactInfo.phone"
            outlined
            dense
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-1">
        <v-col
          md="8"
        >
          <h3 class="font-weight-medium">Address 1</h3>
          <v-text-field
            v-model="contactInfo.address1"
            outlined
            dense
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-1">
        <v-col
          md="8"
        >
          <h3 class="font-weight-medium">Address 2</h3>
          <v-text-field
            v-model="contactInfo.address2"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-1">
        <v-col
          md="4"
        >
          <h3 class="font-weight-medium">City</h3>
          <v-text-field
            v-model="contactInfo.city"  
            outlined
            dense
            required
            id="text-field-border"
          ></v-text-field>
        </v-col>
        <v-col
          md="4"
        >
          <h3 class=" font-weight-medium">State</h3>
          <v-text-field
            v-model="contactInfo.state"
            outlined
            required
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-1">
        <v-col
          md="4"
        >
          <h3 class=" font-weight-medium">Pin Code</h3>
          <v-text-field
            v-model="contactInfo.pinCode"
            outlined
            required
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn
          rounded
          x-large
          color="#FB9012"
          elevation="2"
          class="white--text mt-3"
          @click="checkout"
          >
          Checkout
      </v-btn>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    contactInfo: {
      phone: null,
      address1: null,
      address2: null,
      city: null,
      state: null,
      pinCode: null,
    }
  }),
  methods: {
    checkout () {
      this.$store.dispatch('addContactInfo', this.contactInfo)
      this.$router.push({
        name:'checkout',
        params:{
          name: this.$store.state.user.name
        }
      })
    }
  },
  computed:{
    user: function () {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

  /* https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/Tech+Life+Communicationci.png */
  #headingtext{
    background-color:rgba(37, 24, 29, 1);
    font-family: 'Cormorant Garamond', serif !important;
    font-weight : 500 !important;
    height: 56px;
    font-size: 24px;
    line-height: 132%;
  }

  #labels{
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color : rgba(37, 24, 29, 1) !important;
  }

  #cardsize{
    background-image: url("https://citrine-india-site.s3.ap-south-1.amazonaws.com/cnibg.png");
    background-size: 846px 452px;
    background-position: 705px 70px;
  }
  .v-container{
    font-family: 'Montserrat', sans-serif;
  }
</style>