<template>
  <v-sheet
    id="scrolling-techniques-7"
    class="overflow-y-auto"
    height="100vh"
  >
    <p>something here</p> <!-- If something is written here than only H1 tag works -->
    <!-- For content in empty space use v-container -->
    <v-container
      style="height: 1500px;"
      class="grey lighten-5 mb-6"
    >
      <h1 class="text-center">Happy Grinding</h1>
      <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                View
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in users.docs"
              :key="user._id"
            >
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td><v-btn @click="navigateTo({name:'viewUser',params:{userId:user._id}})">View</v-btn></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="text-center mt-5">
        <v-pagination
          v-model="users.page"
          :length="length"
          circle
          @input="getUsers"
        ></v-pagination>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
import UserServices from '../../../services/userServices'

export default {
  data : () => ({
    users:{
      docs:[],
      limit:null,
      pages:null,
      page:1,
      offset:null,
      total:null,
    },
    length: null,
    sValue: null,
  }),
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    async getUsers (page) {
      this.users = (await UserServices.index(this.sValue, page)).data.data
    //   console.log(this.users)
      this.length = this.users.pages
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.sValue = value
        // console.log('panel watch')
        this.getUsers(this.users.page)
      }
    }
  },
}
</script>