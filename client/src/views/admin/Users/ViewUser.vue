<template>
  <admin>
    <v-row>
      <v-col md="4">
        <v-navigation-drawer permanent >
          <v-list-item>
            <v-list-item-avatar>
              <img v-bind:src="spectatingUser.imageUrl">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ spectatingUser.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ spectatingUser.email }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            dense
            nav
          >
            <v-list-item-title>Change role</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title><a @click="changeRole('admin')">Admin?</a></v-list-item-title>
                <v-list-item-title><a @click="changeRole('wholesaler')">WholeSaler?</a></v-list-item-title>
                <v-list-item-title><a @click="changeRole('customer')">Customer?</a></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list dense>
            <v-list-item
              link
              @click="navigateTo({
                name: 'adminuserpast',
                params:{
                  userId:spectatingUser._id
                }
              })"
            >
              <v-list-item-content>
                <v-list-item-title>Orders Placed</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              link
              @click="navigateTo({
                name: 'adminuserpaylink',
                params:{
                  userId:spectatingUser._id
                }
              })"
            >
              <v-list-item-content>
                <v-list-item-title>Payment link request</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col md="8">
        <slot></slot>
      </v-col>
    </v-row>
  </admin>
</template>

<script>
import UserServices from '../../../services/userServices'

export default {
  data: () => ({
    spectatingUser:null
  }),
  async mounted () {
    const userId = this.$route.params.userId
    this.spectatingUser = (await UserServices.user(userId)).data
  },
  methods:{
    async changeRole (role) {
      console.log(this.$store.state.user._id, this.spectatingUser._id, 'sd')
      if (this.$store.state.user._id === this.spectatingUser._id) {
        if (role !== 'admin') {
          if (confirm('Changing role will take away critical functionality!!')){
            await UserServices.changeRole(this.spectatingUser._id, role)
            return
          }
          return
        }
      }
      
      if (role === 'wholesaler') {
        if (confirm('User will see wholesale prices of a product!!')){
          await UserServices.changeRole(this.spectatingUser._id, role)
        }
      }
      if (role === 'customer') {
        if (confirm('User will see retail prices!!')) {
          await UserServices.changeRole(this.spectatingUser._id, role)
        }
      }
      if (role === 'admin') {
        if (confirm('User will get full access over the site!!')) {
          await UserServices.changeRole(this.spectatingUser._id, role)
        } 
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}

</script>
