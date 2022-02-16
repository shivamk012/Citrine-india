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
      v-model="name"
      label="Product Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="desc"
      label="Product Description"
    ></v-text-field>
    <v-text-field
      v-model="retail"
      label="Retail Price"
    ></v-text-field>
    <v-text-field
      v-model="wholesale"
      label="Wholesale Price"
    ></v-text-field>
    <v-text-field
      v-model="productCode"
      label="Product Code"
    ></v-text-field>
    <v-select
      v-model="category"
      :items="items"
      label="Category"
      required
    ></v-select>
    <v-select
      v-model="collectionValues"
      :items="collectionKeys"
      attach
      chips
      label="Existing Collections"
      multiple
    ></v-select>

    <div>
      <v-file-input
        v-model="files"
        placeholder="Upload your documents"
        label="File input"
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
  import CatalogServices from '../../../services/catalogServices'
  import CollectionServices from '../../../services/collectionServices'

  export default {
    data: () => ({
      loading:false,
      name: 'CRA',
      desc: 'CRA',
      category: null,
      newCollection: '',
      items: [
        'Rings',
        'Necklace',
        'Bracelet',
        'Ear Rings',
        'Handcuffs',
        'Rakhi'
      ],
      collectionKeys: [],
      collectionValues: [],
      retail: 250,
      wholesale: 180,
      files:[],
      productCode: 'CRA'
    }),
    methods: {
      async upload () {
        this.loading = true
        const payload = {
          name:this.name,
          category:this.category,
          collections: this.collectionValues,
          description: this.desc,
          retailPrice: this.retail,
          wholesalePrice: this.wholesale,
          productCode: this.productCode
        }
        const formData = new FormData();
        this.files.forEach(element => {
          formData.append("imageFiles", element)
        });
        formData.append('payload', JSON.stringify(payload))
        formData.append('newCollection', this.newCollection)
        const response = (await CatalogServices.save(formData)).data
        if (response.success) {
          this.loading = false
          window.location.reload();
        }
      },
    },
    async mounted() {
      this.collectionKeys = (await CollectionServices.all()).data
    }
  }
</script>