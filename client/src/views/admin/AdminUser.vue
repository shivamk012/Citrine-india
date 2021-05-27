<template>
  <admin>
    <div
      class="text-section" 
    >
      <!-- Text and Button Section for Gents-page -->
      <v-form>
        <v-container>
          <v-row>
            <!-- Create-Button -->
            <v-col
              cols="4"
              sm="7"
            >
              <v-btn
                tile
                dark
                depressed
              >
                <v-icon left>
                  mdi-pencil
                  flat
                </v-icon>
                Add
              </v-btn>
            </v-col>
            <!-- Search-tab -->
            <v-col
              cols="4"
              sm="3"
            >
              <v-text-field
                label="search items"
                clearable
                color="dark" 
                class="ml-auto"
              ></v-text-field>
            </v-col>
            <!-- Search-Button -->
            <v-col
              cols="4"
              sm="1"
            >
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form> 
      <!-- Examples of all gents collection (max: 8... 4 in each row) -->
    </div>
  </admin>
</template>

<script>

</script>

<style scoped>
  .text-section {
    font-family: Montserrat;
  }
</style>