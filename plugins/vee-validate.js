import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import {
  confirmed,
  digits,
  max_value,
  min,
  min_value,
  numeric,
  is,
  regex,
  required,
} from 'vee-validate/dist/rules'
import PhoneNumber from 'awesome-phonenumber'
import { isValid, parse } from 'date-fns'

extend('digits', {
  ...digits,
})
extend('regex', {
  ...regex,
})
extend('is', {
  ...is,
})
extend('numeric', {
  ...numeric,
})
extend('min_value', {
  // eslint-disable-next-line camelcase
  ...min_value,
})
extend('max_value', {
  // eslint-disable-next-line camelcase
  ...max_value,
})
extend('password', {
  message: () => `Пароль должен быть не менее 8 символов`,
  validate: (value) => {
    return min.validate(value, { length: 8 })
  },
})
extend('confirm-password', {
  ...confirmed,
})
extend('required', {
  ...required,
  message: 'Это поле обязательное для заполнения',
})
extend('email', {
  message: () => `Некорректный Email`,
  validate: (value) => {
    return value.match(/^\S+@\S+\.\S+$/)
  },
})
extend('phone', {
  validate: (value) => {
    const pn = new PhoneNumber(value)
    return pn.isValid()
  },
})
extend('date_format', {
  message: () => `Невалидная дата`,
  validate: (value, params) => {
    try {
      const format = params[0]
      return isValid(parse(value, format, new Date()))
    } catch (e) {
      return false
    }
  },
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
