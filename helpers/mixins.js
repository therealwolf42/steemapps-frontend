import { isValidEmail } from '~/helpers/validators'

export const getValuePosNegClass = {
  methods: {
    getValuePosNegClass(value) {
      let result = ''
      if (value && value >= 1) {
        result = 'is-positive'
      } else if (value && value < 1) {
        result = 'is-negative'
      }
      return result
    }
  }
}

export const validateEmail = {
  methods: {
    validateEmail() {
      let isValid = false
      if (this.email.length > 0) {
        isValid = isValidEmail(this.email)
      } else {
        isValid = false
      }
      this.emailIsValid = isValid
    }
  }
}
