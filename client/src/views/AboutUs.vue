<template>
    <v-sheet color="rgba(240, 240, 242, 1)">
        <v-toolbar
            dense
            flat
            height="80px"
            color="#F0F0F2"
        ></v-toolbar>
        <v-container >
            <v-row>
                <v-col cols="12" md="8" id="givemargin">
                    <div class="d-flex d-md-none flex-column align-center justify-center">
                        <v-img
                            :src="imagesouce[0]"
                            class="mt-10 mb-10"
                            id="imagesize"
                        ></v-img>
                        <v-img
                            :src="imagesouce[1]"    
                            id="imagesize"
                        ></v-img>
                    </div>
                    <!-- <h1 class="grey--text" id="rotate">About</h1> -->
                    <h1 class="display-4 hidden-sm-and-down" id="heading">About Citrine India</h1>
                    <h1 class="display-2 d-none d-sm-block d-md-none text-center" id="heading">About Citrine India</h1>
                    <h1 class="display-2 hidden-sm-and-up text-center" id="heading">About Citrine</h1>
                    <v-col class="d-block d-md-none">
                        <h3 class="display-2" id="changetocoromont">Us</h3>
                        <p id="changetomontserrat" class="text-h6">
                            A passion for jewellery and desire for the unorthodox is what brought sisters Radhika Khunteta and Ayesha Rawat together to launch Citrine in 2013. The duo developed a love for jewellery at a young age and grew up to pursue the same with a diploma in jewellery design from The International Gemological Institute, Mumbai.
                        </p>
                    </v-col>
                    <v-col class="d-block d-md-none">
                        <h3 class="display-2" id="changetocoromont">The Brand</h3>
                        <p id="changetomontserrat" class="text-h6">
                            Citrine brings to you an exquisite range of handcrafted semi-precious statement jewellery. Each design is handcrafted by a team of skilled master artisans from jaipur. Unique utilisation of various semi-precious stones and casting pieces add an interesting look to each piece.
                        </p>
                    </v-col>
                    <v-row>
                        <v-col cols="12" md="5" id="givenmargin" class="mb-10 d-none d-md-block">
                            <h3 class="display-2" id="changetocoromont">Us</h3>
                            <p id="changetomontserrat" class="text-h6">
                                A passion for jewellery and desire for the unorthodox is what brought sisters Radhika Khunteta and Ayesha Rawat together to launch Citrine in 2013. The duo developed a love for jewellery at a young age and grew up to pursue the same with a diploma in jewellery design from The International Gemological Institute, Mumbai.
                            </p>
                        </v-col>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="5" id="givenmargin" class="mb-10 d-none d-md-block">
                            <h3 class="display-2" id="changetocoromont">The Brand</h3>
                            <p id="changetomontserrat" class="text-h6">
                                Citrine brings to you an exquisite range of handcrafted semi-precious statement jewellery. Each design is handcrafted by a team of skilled master artisans from jaipur. Unique utilisation of various semi-precious stones and casting pieces add an interesting look to each piece.
                            </p>
                        </v-col>
                    </v-row>
                    <h3 class="display-2 mt-10" id="changetocoromont">Craftsmanship</h3>
                    <p id="changetomontserrat" class="text-h6">
                        Experimenting with colour, cut and casting, these designer’s aim is to use their jewellery to make women feel glamorous and special every single day of their lives.
                    </p>
                    </v-col>
                <v-col cols="12" md="2" class="hidden-sm-and-down">
                    <img
                        :src="imagesouce[0]"
                        class="mt-10"
                        alt="image not available"
                    >
                    <img
                        :src="imagesouce[1]"
                        class="mt-10"
                        alt="image not available"
                    >
                </v-col>
                
            </v-row>
        </v-container>
    </v-sheet>
</template>

<script>
export default {
     data () {
      return {
        imagesouce : [
            "https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/aboutradhey.png",
            "https://citrine-india-site.s3.ap-south-1.amazonaws.com/Homepage/aboutchinky.png",
        ],
      }
    },
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Montserrat:wght@300&display=swap');
    #givemargin{
        margin-top : 300px !important;
    }
    #givenmargin{
        margin-top : 204px !important;
    }
    #changetocoromont{
        font-family: 'Cormorant Garamond', serif !important;
        color: #25181D !important;
    }
    #changetomontserrat{
        font-family: 'Montserrat', sans-serif !important;
        /* font-size: 16px !important; */
    }

    #heading{
        font-weight: 600 !important;
        font-family: 'Cormorant Garamond', serif !important;
    }

    #rotate{
        transform: rotate(90deg);
    }

    #imagesize{
        width:224px;
        height:272px;
    }

    @media only screen and (max-width: 960px) {
        #imagesize {
            width:300px;
            height:272px;
        }

        #givemargin{
            margin-top : 0px !important;
        }

        #heading{
            margin-top : 100px !important;
            margin-bottom : 70px !important;
        }
    }
</style>