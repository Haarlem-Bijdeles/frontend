<template>
  <div>
    <h2>Neem contact met ons op</h2>
    <p v-if="submitted">
      Het formulier is verzonden. We nemen zo spoedig mogelijk contact met u op.
    </p>

    <form
      v-else
      action
      data-netlify="true"
      netlify-honeypot="bot-field"
      method="post"
      name="contact"
      @submit.prevent="submit"
    >
      <p>
        Vul het formulier in met uw gegevens. Wij zullen u zo spoedig mogelijk
        benaderen.
      </p>

      <input type="hidden" name="form-name" value="contact" />

      <form-fieldset title="Contactformulier">
        <form-input-text
          id="name"
          v-model.trim.lazy="$v.form.name.$model"
          :error-message="errorMessageName"
          :title="$t('form.name')"
          type="text"
          name="name"
          autocomplete="name"
        />
        <form-input-text
          id="email"
          v-model.trim.lazy="$v.form.email.$model"
          :error-message="errorMessageEmail"
          :title="$t('form.email')"
          name="email"
          type="email"
          autocomplete="email"
        />
        <form-input-text
          id="phone"
          v-model="form.phonenumber"
          :title="$t('form.phoneNumber')"
          type="tel"
          name="phone"
          autocomplete="tel"
        />
        <form-textarea
          id="message"
          v-model.trim="form.message"
          :title="$t('form.message')"
          name="message"
          rows="4"
          type="message"
        />
        <form-input-text
          id="bot-field"
          v-model="form.botField"
          :title="$t('form.botField')"
          type="text"
          :class="$style['bot-field']"
          name="bot-field"
        />

        <app-button type="submit" :is-full-width="true">Verzenden</app-button>
      </form-fieldset>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import FormFieldset from '~/components/Forms/FormFieldset.vue'
import FormInputText from '~/components/Forms/FormInputText.vue'
import FormTextarea from '~/components/Forms/FormTextarea.vue'
import AppButton from '~/components/Shared/AppButton.vue'

export default {
  components: {
    FormFieldset,
    FormInputText,
    FormTextarea,
    AppButton,
  },
  data() {
    return {
      submitted: false,
      form: {
        name: '',
        email: '',
        message: '',
        phonenumber: '',
        botField: '',
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
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
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
        try {
          await this.$axios.$post(
            '/',
            this.encodeFormData({
              'form-name': 'contact',
              ...this.form,
            }),
            axiosConfig,
          )
          this.submitted = true
        } catch (error) {}
      }
    },
  },
}
</script>

<style lang="postcss" module>
.bot-field {
  display: none;
}
</style>
