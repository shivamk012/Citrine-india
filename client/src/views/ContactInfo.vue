<template>
  <div>
    <v-card
      elevation="2"
      shaped
    >
      <h1 class="text-center">Contact Information</h1>
      <v-card-title>Contact Number</v-card-title>
      <v-card-actions>
        <v-text-field
          label="Contact"
          v-model="contactInfo.phone"
          outlined
          dense
        ></v-text-field>
      </v-card-actions>
      <v-card-title>Shipping Address</v-card-title>
      <v-card-actions>
        <v-text-field
          label="Address 1"
          v-model="contactInfo.address1"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="Address 2"
          v-model="contactInfo.address2"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="City"
          v-model="contactInfo.city"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="state"
          v-model="contactInfo.state"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="PIN Code"
          v-model="contactInfo.pinCode"
          outlined
          dense
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Save it for future orders?"
        ></v-checkbox>
      </v-card-actions>
      <v-btn
        elevation="2"
        color="black"
        class="white--text mt-3"
        @click="checkout"
        >
        Checkout
      </v-btn>
    </v-card>
    <!-- <v-container class="mt-12">
      <v-row class="mt-2">
        <v-card
          class="mx-auto"
          width="450"
          flat
        >
          <v-carousel
            :continuous="false"
            :cycle="cycle"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="400"
            width="450"
          >
            <v-carousel-item
              v-for="(src, i) in displayProduct.image"
              :key="i"
              :src="src"
              contain
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
        <v-card
          class="mx-auto"
          width="450"
          flat
        >
          <v-card-text>
            <p class="text-h3 grey--text text--darken-3">{{ displayProduct.name }}</p>
            <p class="text-h5">
              {{ displayProduct.description }}
            </p>
            <p class="text-h6">MRP : <span>Rs {{ displayProduct.retailPrice }}</span></p>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container> -->
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