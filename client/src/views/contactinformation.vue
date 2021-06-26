<template>
    <div>
        <div class="display-2 text-center white--text text-uppercase" id="headingtext">
            <p>Contact Information</p>
        </div>
        <div id="info">
            <v-card
                outlined
                color="#E5E5E5"
                id="cardsize"
            >
                <v-row >
                        <v-col >
                            <v-card-title id="labels" class="font-weight-medium">Your Name</v-card-title>
                            <v-card-actions>
                                <v-text-field
                                v-model="contactInfo.phone"  
                                outlined
                                dense
                                id="text-field-border"
                                ><!-- Change v-model --></v-text-field>
                            </v-card-actions>
                        </v-col>
                        <v-col>
                            <v-card-title class=" font-weight-medium">Contact Number</v-card-title>
                                <v-card-actions>
                                <v-text-field
                                v-model="contactInfo.phone"
                                outlined
                                dense
                                ></v-text-field>
                            </v-card-actions>
                        </v-col>
                </v-row>
                <v-card-title class="font-weight-medium">Address Line 1</v-card-title>
                <v-card-actions>
                    <v-text-field
                    v-model="contactInfo.address1"
                    outlined
                    dense
                    ></v-text-field>
                </v-card-actions>
                <v-card-title class="font-weight-medium">Address Line 2</v-card-title>
                <v-card-actions>
                    <v-text-field
                    v-model="contactInfo.address2"
                    outlined
                    dense
                    ></v-text-field>
                </v-card-actions>
                <v-row>
                    <v-col>
                        <v-card-title class="font-weight-medium">City</v-card-title>
                        <v-card-actions>
                            <v-text-field
                            v-model="contactInfo.city"
                            outlined
                            dense
                            ></v-text-field>
                        </v-card-actions>
                    </v-col>
                    <v-col>
                        <v-card-title class="font-weight-medium">State</v-card-title>
                        <v-card-actions>
                            <v-text-field
                            v-model="contactInfo.state"
                            outlined
                            dense
                            ></v-text-field>
                        </v-card-actions>
                    </v-col>
                </v-row>
                <v-card-title class="font-weight-medium">Pin Code</v-card-title>
                <v-card-actions>
                    <v-text-field
                        width = "424"
                        v-model="contactInfo.pinCode"
                        outlined
                        dense
                    ></v-text-field>
                    </v-card-actions>
                <v-card-actions>
                    <v-checkbox
                    v-model="checkbox"
                    :error-messages="checkboxErrors"
                    label="Save it for future orders?"
                    ></v-checkbox>
                </v-card-actions>

                <v-btn
                    rounded
                    x-large
                    color="black"
                    elevation="2"
                    class="white--text mt-3"
                    @click="checkout"
                    >
                    Checkout
                </v-btn>
            </v-card>
        </div>

            <v-card width="216px" height="288px">
                <v-img
                    src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg"
                    class="white--text"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                <v-app-bar
                    flat
                    color="rgba(0, 0, 0, 0)"
                >

                    <v-spacer></v-spacer>

                    <v-btn
                        color="white"
                        icon
                    >
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                </v-app-bar>
                <v-card-actions>
                    <v-btn rounded outlined color="white">Buy Now</v-btn>
                </v-card-actions>
            </v-img>
          </v-card>
    </div>
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
  }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

    #headingtext{
        background-color:rgba(37, 24, 29, 1);
        font-family: 'Cormorant Garamond', serif !important;
        font-weight : 500 !important;
        height: 72px;
    }

    #labels{
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        color : rgba(37, 24, 29, 1) !important;
    }

    #cardsize{
        padding-top:100px;
        
        padding-left:72px;
        padding-right:472px;
        background-image: url("https://drive.google.com/file/d/1A-kJmmrAsxcI0wys4lrZxUf45QsJzJPU/view?usp=sharing");
        background-size: 846px 452px;
        background-position: 705px 70px;
        
    }
</style>

