<template>
    <v-app-bar
        color= "rgba(240, 240, 242, 1)"
        flat
        height = "100px"
    >
        <v-toolbar-title class="font-weight-light">Citrine India</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <v-img 
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                class="rounded-circle"
                width = "280px"
                max-height = "420px"
            >
            </v-img>
        </div>
        <v-spacer></v-spacer>
        <div>
        <v-btn
            text
            class="font-weight-bold text-capitalize"
            block
        >
            Trends
        </v-btn>
        </div>
        <div>
        <v-btn
            text
            class="font-weight-bold text-capitalize "
            block
        >
            Collections
        </v-btn>
        </div>
        <div>
        <v-btn
            text
            class="font-weight-bold text-capitalize"
            block
        >
            Jewellery
        </v-btn>
        </div>
         <v-spacer></v-spacer>
        <div>
        <v-text-field
            class="mt-8"
            rounded
            left
            prepend-inner-icon="mdi-magnify"
            filled
            dense
          ></v-text-field>
        </div>
        <v-spacer></v-spacer>
        <div>
        <v-btn
            icon
        >
        <v-icon>
              mdi-cart
        </v-icon>
        </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div>
        <v-btn
            icon
        >
            <v-icon>
                mdi-menu
            </v-icon>
        </v-btn>
        </div>
        <v-spacer></v-spacer>
        
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
    .v-app-bar {
        font-family: 'Cormorant Garamond', serif;
        font-size : 45px;
    }
</style>