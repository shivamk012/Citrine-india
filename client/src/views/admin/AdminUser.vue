<template>
  <admin>
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
  </admin>
</template>

<script>
import UserServices from '../../services/userServices'

export default {
  data : () => ({
    users:{
      docs:[],
      limit:null,
      pages:null,
      page:null,
      offset:null,
      total:null,
    }
  }),
  async mounted () {
    this.users = (await UserServices.getUsers()).data
    console.log(this.users)
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
  .text-section {
    font-family: Montserrat;
  }
</style>