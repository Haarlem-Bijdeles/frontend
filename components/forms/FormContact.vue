<template>
  <div>
    <h2>Neem contact met ons op</h2>
    <p v-if="submitted">
      Vul het formulier in met uw gegevens. Wij zullen u zo spoedig mogelijk
      benaderen.
    </p>

    <form
      v-else
      action
      data-netlify="true"
      method="post"
      @submit.prevent="submit"
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
          :title="$t('form.name')"
          type="text"
          name="name"
        />
        <form-input-text
          v-model.trim.lazy="$v.form.email.$model"
          :error-message="errorMessageEmail"
          :title="$t('form.email')"
          name="email"
          type="email"
        />
        <form-input-text
          v-model="form.phonenumber"
          :title="$t('form.phoneNumber')"
          type="tel"
          name="phone"
        />
        <form-textarea
          v-model.trim="form.message"
          :title="$t('form.message')"
          name="message"
          rows="4"
          type="message"
        />
        <button type="submit" class="btn">Verzenden</button>
      </form-fieldset>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'
import FormFieldset from '@/components/Forms/FormFieldset.vue'
import FormInputText from '@/components/Forms/FormInputText.vue'
import FormTextarea from '@/components/Forms/FormTextarea.vue'

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
