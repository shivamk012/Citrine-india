<template>
    <v-sheet color="rgba(240, 240, 242, 1)">
        <v-toolbar
            dense
            flat
            height="105px"
            color="rgba(37, 24, 29, 1)"
        >
        </v-toolbar>
        <v-container >
            <v-row>
                <v-col md="8" id    ="givemargin">
                    <div class="d-block d-sm-none">
                        <v-img
                            :src="imagesouce[0]"
                            class="mt-10 mb-10"
                        ></v-img>
                        <v-img
                            :src="imagesouce[1]"
                        ></v-img>
                    </div>
                    <h1 class="display-3 " id="changetocoromont">About Citrine India</h1>
                    <v-row>
                        <v-col md="5" id="givenmargin" class="mb-10">
                            <h3 class="display-1" id="changetocoromont">Us</h3>
                            <p id="changetomontserrat">
                                A passion for jewellery and desire for the unorthodox is what brought sisters Radhika Khunteta and Ayesha Rawat together to launch Citrine in 2013. The duo developed a love for jewellery at a young age and grew up to pursue the same with a diploma in jewellery design from The International Gemological Institute, Mumbai.
                            </p>
                        </v-col>
                        <!-- <v-col md="1"></v-col> -->
                        <v-spacer vertical></v-spacer>
                        <v-col md="5" id="givenmargin" class="mb-10">
                            <h3 class="display-1" id="changetocoromont">The Brand</h3>
                            <p id="changetomontserrat">
                                Citrine brings to you an exquisite range of handcrafted semi-precious statement jewellery. Each design is handcrafted by a team of skilled master artisans from jaipur. Unique utilisation of various semi-precious stones and casting pieces add an interesting look to each piece.
                            </p>
                        </v-col>
                    </v-row>
                    <h3 class="display-1 mt-10" id="changetocoromont">Craftsmanship</h3>
                    <p id="changetomontserrat">
                        Experimenting with colour, cut and casting, these designer’s aim is to use their jewellery to make women feel glamorous and special every single day of their lives.
                    </p>
                    </v-col>
                <v-col md="1"></v-col>
                <v-col md="3" class="d-none d-sm-block">
                    <v-img
                        :src="imagesouce[0]"
                        class="mt-10 mb-10"
                    ></v-img>
                    <v-img
                        :src="imagesouce[1]"
                    ></v-img>
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
            "https://citrine-india-site.s3.ap-south-1.amazonaws.com/about1.png",
            "https://citrine-india-site.s3.ap-south-1.amazonaws.com/about2.png",
        ],
      }
    },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Montserrat:wght@300&display=swap');
    #givemargin{
        margin-top : 300px;
    }

    #givenmargin{
        margin-top : 154px !important;
    }

    #changetocoromont{
        font-family: 'Cormorant Garamond', serif !important;
        color: #25181D !important;
    }

    #changetomontserrat{
        font-family: 'Montserrat', sans-serif !important;
        /* font-size: 16px !important; */
    }
</style>
