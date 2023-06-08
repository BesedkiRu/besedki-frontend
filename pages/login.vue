<template>
  <div class="flex xl:items-center xl:justify-center gap-2 w-full">
    <div
      class="w-1/2 pl-[270px] pt-[100px] 2xl:pl-[200px] 2xl:pt-[60px] xl:w-auto xl:p-0"
    >
      <nuxt-link to="/" class="flex items-center text-lg text-blue-link mb-2"
        ><i-arrow :size="24"></i-arrow>
        <div>Вернуться назад</div></nuxt-link
      >
      <validation-observer ref="form">
        <form novalidate @submit.prevent="onSubmit">
          <fieldset :disabled="formDisabled">
            <div class="flex flex-col gap-10">
              <div>
                <div class="font-medium text-4xl leading-none">
                  Вход в Беседки.ру
                </div>
                <div class="text-lg text-gray-dark leading-none mt-5">
                  Ещё нет аккаунта?
                  <nuxt-link class="text-blue-link hover-underline" to="/signup"
                    >Зарегистрироваться</nuxt-link
                  >
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <validation-provider v-slot="{ errors }" rules="required|email">
                  <base-input
                    v-model="data.email"
                    class="max-w-[420px]"
                    label="Email"
                    :error-messages="errors"
                    name="email"
                    placeholder="alex@mail.ru"
                  />
                </validation-provider>
                <validation-provider v-slot="{ errors }" rules="required">
                  <base-input
                    v-model="data.password"
                    class="max-w-[420px]"
                    label="Пароль"
                    type="password"
                    :error-messages="errors"
                    name="password"
                    placeholder="••••••••••••••"
                  />
                </validation-provider>
              </div>
              <base-button
                type="submit"
                size="large"
                button-style="primary"
                class="max-w-[420px] w-full"
                >Войти</base-button
              >
              <div
                class="flex flex-col justify-center items-center gap-[30px] mt-2.5 max-w-[420px] w-full"
              >
                <div>Или войти с помощью</div>
                <div class="flex gap-2.5 text-blue-link font-medium">
                  <base-button
                    class="w-[164px]"
                    size="large"
                    button-style="secondary"
                  >
                    <i-google :size="24" />
                    <span>Google</span>
                  </base-button>
                  <base-button
                    class="w-[164px]"
                    size="large"
                    button-style="secondary"
                  >
                    <i-vk :size="24" />
                    <span>ВКонтакте</span>
                  </base-button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </validation-observer>
    </div>
    <div
      :style="{
        backgroundImage: `url(${require('~/assets/images/login-bg.svg')})`,
      }"
      class="w-1/2 xl:hidden h-screen bg-no-repeat bg-cover bg-center"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '~/components/base/BaseButton.vue'
import IGoogle from '~/components/icons/IGoogle.vue'
import IVk from '~/components/icons/IVk.vue'
import BaseInput from '~/components/base/BaseInput.vue'
import { ValidateForm } from '~/config/types'
import IArrow from '~/components/icons/IArrow.vue'

export default Vue.extend({
  name: 'SignupPage',
  components: { BaseInput, IVk, IGoogle, BaseButton, IArrow },
  data() {
    return {
      formDisabled: false,
      data: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    form(): ValidateForm {
      return this.$refs.form as ValidateForm
    },
  },
  methods: {
    async onSubmit() {
      const isValid = await this.form.validate()
      if (!isValid) {
        this.$toast.error('Проверьте корректность данных')
        return
      }
      this.formDisabled = true
      try {
        await this.$auth.login({ data: this.data })
      } catch (e: any) {
        console.log(e.response.data.message)
        this.$toast.error('Произошла ошибка. Попробуйте позже')
      } finally {
        this.formDisabled = false
      }
    },
  },
})
</script>

<style scoped></style>
