<template>
  <v-container>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Product Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
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
      name: 'CRA',
      desc: 'CRA',
      category: null,
      newCollection: '',
      items: [
        'Kids',
        'Men',
        'Women'
      ],
      collectionKeys: [],
      collectionValues: [],
      retail: 250,
      wholesale: 180,
      files:[],
      productCode: 'CRA'
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

    methods: {
      async upload () {
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
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
      },
    },
    async mounted() {
      this.collectionKeys = (await CollectionServices.all()).data
    }
  }
</script>