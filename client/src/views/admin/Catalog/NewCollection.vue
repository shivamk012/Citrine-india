<template>
  <v-container>
    <!-- toolbar to give extra space -->
    <v-toolbar
      dense
      flat
      height="105px"
      color="rgba(37, 24, 29, 1)"
    ></v-toolbar>
    <v-text-field
      v-model="newCollection"
      label="New collection"
    ></v-text-field>

    <div>
      <v-file-input
        v-model="files"
        placeholder="Upload your documents"
        label="Images"
        multiple
        prepend-icon="mdi-paperclip"
      >
        <template v-slot:selection="{ text }">
          <v-chip
            small
            label
            color="primary"
          >
            {{ text }}
          </v-chip>
        </template>
      </v-file-input>

      <v-btn
        :loading="loading"
        :disabled="loading"
        color="blue-grey"
        class="ma-2 white--text"
        @click="upload"
      >
        Upload
        <v-icon
          right
          dark
        >
          mdi-cloud-upload
        </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
//   import CatalogServices from '../../../services/catalogServices'
  import CollectionServices from '../../../services/collectionServices'

  export default {
    data: () => ({
      loading:false,
      newCollection: '',
      files:[],
    }),
    methods: {
      async upload () {
        this.loading = true
        const formData = new FormData();
        this.files.forEach(element => {
          formData.append("imageFiles", element)
        });
        formData.append('name', this.newCollection)
        const response = (await CollectionServices.newCollection(formData)).data
        if (response.success) {
          this.loading = false
          window.location.reload();
        }
      }
    },
    async mounted() {
      this.collectionKeys = (await CollectionServices.all()).data
    }
  }
</script>