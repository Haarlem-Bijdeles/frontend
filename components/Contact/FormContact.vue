<template>
  <div>
    <h2>Neem contact met ons op</h2>
    <p v-if="submitted">Succes</p>

    <form
      v-else
      @submit.prevent="submit"
      action
      data-netlify="true"
      method="post"
      name="contact"
    >
      <p>
        Vul het formulier in met uw gegevens. Wij zullen u zo spoedig mogelijk
        benaderen.
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <form-fieldset title="Contactformulier">
        <form-input-text
          v-model.trim.lazy="$v.form.name.$model"
          :error-message="errorMessageName"
          type="text"
          name="name"
          title="Name"
        />
        <form-input-text
          v-model.trim.lazy="$v.form.email.$model"
          :error-message="errorMessageEmail"
          name="email"
          type="email"
          title="E-mailaddress"
        />
        <form-input-text
          v-model="form.phonenumber"
          type="tel"
          name="phone"
          title="Telefoonnummer"
        />
        <form-textarea
          v-model.trim="form.message"
          name="message"
          rows="4"
          type="message"
          title="Bericht"
        />
        <button type="submit" class="btn">Verzenden</button>
      </form-fieldset>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'
import FormFieldset from '@/components/forms/FormFieldset.vue'
import FormInputText from '@/components/forms/FormInputText.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'

export default {
  components: {
    FormFieldset,
    FormInputText,
    FormTextarea,
  },
  data() {
    return {
      submitted: false,
      form: {
        name: '',
        email: '',
        message: '',
        phonenumber: '',
      },
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  computed: {
    errorMessageName() {
      if (this.$v.form.name.$anyError) {
        if (!this.$v.form.name.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.name').toLowerCase(),
          })
        }
      }
      return null
    },
    errorMessageEmail() {
      if (this.$v.form.email.$anyError) {
        if (!this.$v.form.email.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.email').toLowerCase(),
          })
        }

        if (!this.$v.form.email.email) return this.$t('form.error.email.email')
      }
      return null
    },
  },
  methods: {
    encodeFormData(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&')
    },
    validate() {
      this.$v.$touch()
      return !this.$v.$invalid
    },
    async submit() {
      this.errorMessageForm = ''
      if (this.validate()) {
        const axiosConfig = {
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
        await axios.post(
          '/',
          this.encodeFormData({
            'form-name': 'contact',
            ...this.form,
          }),
          axiosConfig,
        )
        this.submitted = true
      }
    },
  },
}
</script>
