<template>
  <div class="flex w-full">
    <div class="w-1/2 flex pl-[270px] pt-[100px]">
      <validation-observer ref="form">
        <form ref="htmlForm" novalidate @submit.prevent="onSubmit">
          <fieldset :disabled="formDisabled">
            <nuxt-link
              to="/"
              class="flex items-center text-lg text-blue-link mb-2"
              ><i-arrow :size="24"></i-arrow>
              <div>Вернуться назад</div></nuxt-link
            >
            <div class="flex flex-col gap-10">
              <div>
                <div class="font-medium text-4xl leading-none">
                  Создание организации
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <validation-provider v-slot="{ errors }" rules="required">
                  <base-input
                    v-model="data.name"
                    class="max-w-[420px]"
                    label="Наименование организации"
                    :error-messages="errors"
                    name="name"
                    placeholder="ООО “Беседки ру”"
                  />
                </validation-provider>
                <validation-provider v-slot="{ errors }" rules="required">
                  <base-input
                    v-model="data.directorFullName"
                    class="max-w-[420px]"
                    label="ФИО руководителя"
                    :error-messages="errors"
                    name="directorFullName"
                    placeholder="Фролов Александр Вадимович"
                  />
                </validation-provider>
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
                    v-model="data.phone"
                    class="max-w-[420px]"
                    label="Номер телефона"
                    :error-messages="errors"
                    mask="+7 ### ### ## ##"
                    name="phone"
                    placeholder="+7 965 784 76 23"
                  />
                </validation-provider>
              </div>
              <base-button
                type="submit"
                size="large"
                button-style="primary"
                class="max-w-[420px] w-full"
                >Создать организацию</base-button
              >
            </div>
          </fieldset>
        </form>
      </validation-observer>
    </div>
    <div
      :style="{
        backgroundImage: `url(${require('~/assets/images/createOrganizationBg.svg')})`,
      }"
      class="w-1/2 h-screen bg-no-repeat bg-cover bg-center"
    ></div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import BaseButton from '~/components/base/BaseButton.vue'
import BaseInput from '~/components/base/BaseInput.vue'
import { ValidateForm } from '~/config/types'
import IArrow from '~/components/icons/IArrow.vue'
export default Vue.extend({
  name: 'OrganizationPage',
  components: { BaseButton, BaseInput, IArrow },
  data() {
    return {
      formDisabled: false,
      data: {
        name: '',
        directorFullName: '',
        email: '',
        phone: '',
      },
    }
  },
  computed: {
    form(): ValidateForm {
      return this.$refs.form as ValidateForm
    },
    htmlForm(): HTMLFormElement {
      return this.$refs.htmlForm as HTMLFormElement
    },
  },
  methods: {
    async onSubmit() {
      const isValid = await this.form.validate()
      if (!isValid) {
        this.$toast.error('Проверьте корректность данных')
        return
      }
      try {
        await this.$axios.post('/api/organization/create', this.data)
        await this.$auth.fetchUser()
        this.htmlForm.reset()
        this.$toast.success('Организация успешно создана')
        await this.$router.push('/cabinet')
      } catch (e) {
        this.$toast.error('Произошла ошибка. Попробуйте позже')
      }
    },
  },
})
</script>
