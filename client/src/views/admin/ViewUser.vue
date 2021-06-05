<template>
  <admin>
    <v-navigation-drawer permanent >
      <v-list-item>
        <v-list-item-avatar>
          <img v-bind:src="user.imageUrl">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ user.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ user.email }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </admin>
</template>

<script>
import UserServices from '../../services/userServices'

export default {
  data: () => ({
    user:null
  }),
  async mounted () {
    const userId = this.$route.params.userId
    this.user = (await UserServices.user(userId)).data
    console.log(this.$store.state.user.imageUrl)
  }
}

</script>
