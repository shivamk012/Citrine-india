<template>
  <div class="d-flex flex-row">
    <v-text-field label="Search" v-model="search">
    </v-text-field>
    <v-btn
      depressed flat
      color="white"
      class="black--text"
    >
      Quick Search
    </v-btn>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (){
      const route = {
        name: "adminCatalog"
      }

      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
