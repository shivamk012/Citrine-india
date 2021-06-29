<template>
    <v-sheet id="givebackground">
        <v-sheet id="givegradient">
            <v-toolbar
                dense
                flat
                height="105px"
                color="rgba(37, 24, 29, 1)"
            >
            </v-toolbar>
            <v-container>
                <div class="text-center mt-10">
                    <p id="giveComfortaa" class="white--text text-h2">about</p>
                    <p id="giveComfortaa" class="d-flex align-center text-subtitle-1 white--text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, ea, voluptas laudantium repellendus voluptates exercitationem beatae porro odit saepe sint commodi assumenda, incidunt quisquam! Praesentium dignissimos labore dolores similique numquam!</p>
                </div>
                <div id="givemargin">
                    <v-card
                        elevation="2"
                        tile      
                        max-width="250px"  
                        max-height="310px"  
                    >
                        <v-img :src="rishikhandelwal.image"></v-img>
                        <v-card
                            id="insidecard"
                            elevation="5"
                            outlined
                        >
                            <v-app-bar clipped-right flat>
                                <v-app-bar-title >bonker of exertion</v-app-bar-title>
                            </v-app-bar>
                            <v-card-title>{{rishikhandelwal.name}}</v-card-title>
                            <p>I am Rishi Khandelwal</p>
                        </v-card>
                    </v-card>
                </div>
            </v-container>
        </v-sheet>
    </v-sheet>
</template>

<script>
export default {
    data : () => ({
       rishikhandelwal: {
           name:'Rishi Khandelwal',
           image:"https://citrine-india-site.s3.ap-south-1.amazonaws.com/about1.png",
       },
       kshitijkhandelwal: {
           name : 'Kshitij Khandelwal',
           image:"https://citrine-india-site.s3.ap-south-1.amazonaws.com/about1.png",
       },
       shivamkoolwal: {
           name : 'Shivam Koolwal',
           image:"https://citrine-india-site.s3.ap-south-1.amazonaws.com/about1.png",
       },
    }),
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
    #givebackground{
        background-color: #020C10;
    }
    
    #givegradient{
        width: 100vw;
        height: 100vh;
        left: 0px;
        top: 0px;
        
        background: linear-gradient(287deg, rgba(16, 197, 186, 0.2) -7.7%,
         rgba(96, 247, 59, 0) 89.96%), 
         linear-gradient(132.39deg, #620537 -13.15%,
          rgba(57, 4, 75, 0) 61.29%);
        /* filter: blur(12px); */
    }

    #giveComfortaa{
        font-family: 'Comfortaa', cursive !important;
        /* font-size: 42px !important;
        line-height: 47px !important;

        letter-spacing: -1.5px !important; */
        /* color:rgba(244, 249, 252, 1) !important;     */
    }

    #insidecard{
        max-width: 600px !important;
        max-height: 600px !important;
        width:320px !important;
        height:170px !important;
        margin-top : -180px !important;
        margin-left : 125px !important;
    }

    #givemargin{
        margin-top : 100px !important;
    }
</style>

