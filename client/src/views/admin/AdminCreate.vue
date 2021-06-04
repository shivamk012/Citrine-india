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
    <v-btn>
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import CatalogServices from '../../services/catalogServices'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
    },

    data: () => ({
      loading:false,
      name: '',
      desc: '',
      category: null,
      newCollection: '',
      items: [
        'Kids',
        'Men',
        'Women'
      ],
      collectionKeys: ['foo', 'bar', 'fizz', 'buzz'],
      collectionValues: [],
      retail: null,
      wholesale: null,
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

    methods: {
      async upload () {
        this.loading = true
        const formData = new FormData();
        this.files.forEach(element => {
          formData.append("imageFiles", element)
        });
        const response = (await CatalogServices.save(formData)).data
        if (response.success) {
          this.loading = false
        }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
      },
    },
  }
</script>