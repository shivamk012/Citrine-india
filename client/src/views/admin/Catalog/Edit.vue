<template>
  <v-container>
    <v-text-field
      v-model="product.name"
      :error-messages="nameErrors"
      :counter="10"
      label="Product Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="product.description"
      label="Product Description"
    ></v-text-field>
    <v-text-field
      v-model="product.retailPrice"
      label="Retail Price"
    ></v-text-field>
    <v-text-field
      v-model="product.wholesalePrice"
      label="Wholesale Price"
    ></v-text-field>
    <v-text-field
      v-model="product.productCode"
      label="Product Code"
    ></v-text-field>
    <v-select
      v-model="product.category"
      :items="items"
      label="Category"
      required
    ></v-select>
    <v-text-field
      v-model="newCollection"
      label="New collection"
    ></v-text-field>
    <v-select
      v-model="collectionValues"
      :items="collectionKeys"
      attach
      chips
      label="Existing Collections"
      multiple
    ></v-select>

    <div
      class="d-flex flex-row"
      v-for="(img, i) in product.image"
      :key="i"
    >
      <v-img
        :src="img"
        max-height="150"
        max-width="250"
      ></v-img>
      <v-btn
        @click="remove(img)"
      >Remove</v-btn>
    </div>

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
        @click="update"
      >
        Update
        <v-icon
          right
          dark
        >
          mdi-cloud-upload
        </v-icon>
      </v-btn>
      <v-btn
        @click="Delete"
      >
        Delete
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import CatalogServices from '../../../services/catalogServices'
  import CollectionServices from '../../../services/collectionServices'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
    },

    data: () => ({
      loading:false,
      removedImage: null,
      product:{
        name: null,
        description: null,
        category: null,
        collections: [],
        retailPrice: null,
        wholesalePrice: null,
        productCode: null,
        image:[]
      },
      newCollection: '',
      items: [
        'Kids',
        'Men',
        'Women'
      ],
      collectionKeys: [],
      collectionValues: [],
      files:[],
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
    },
    async mounted(){
      const productId = this.$route.params.productId
      this.product = (await CatalogServices.get(productId)).data;
      this.collectionValues = this.product.collections
      this.collectionKeys = (await CollectionServices.all()).data
    },
    methods: {
      async update () {
        if (this.removedImage) {
          let key = this.removedImage.map(item => {
            return item.substr(item.lastIndexOf('/')+1, item.length)
          })
          await CatalogServices.removeImage(key)
        }
        this.loading = true
        this.collectionValues = [
          ...this.collectionValues,
          this.newCollection,
        ]
        const payload = {
          name:this.name,
          category:this.category,
          collections: this.collectionValues,
          description: this.desc,
          retailPrice: this.retail,
          wholesalePrice: this.wholesale,
          productCode: this.productCode,
          image: this.product.image
        }
        const formData = new FormData();
        this.files.forEach(element => {
          formData.append("imageFiles", element)
        });
        formData.append('payload', JSON.stringify(payload))
        const response = (await CatalogServices.update(formData, this.$route.params.productId)).data
        if (response.success) {
          this.loading = false
          window.location.reload();
        }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
      },
      async remove(img) {
        this.product.image.splice(this.product.image.indexOf(img),1)
        this.removedImage.push(img)
      }
    },
  }
</script>