<template>
  <div class="flex flex-col gap-[98px]">
    <div class="text-5xl font-medium">Настройки</div>
    <div class="flex gap-[124px] justify-center">
      <div class="flex flex-col gap-10 items-center">
        <div class="flex flex-col gap-5 items-center">
          <div class="w-[150px] h-[150px] bg-gray rounded-full"></div>
          <div class="font-medium text-4xl text-center">
            {{ $auth.user.organization.name }}
          </div>
        </div>
        <base-button size="large" class="flex gap-1 items-center">
          <i-plus :size="24"></i-plus>
          <div>Загрузить фотографию</div>
        </base-button>
      </div>
      <div class="w-[2px] border-2 border-border-gray h-full"></div>

      <div class="flex flex-col gap-[30px] max-w-[645px] w-full">
        <div
          class="font-medium text-2xl leading-none border-b border-border-gray pb-5"
        >
          Основная информация
        </div>
        <validation-observer ref="form">
          <form ref="htmlForm" novalidate @submit.prevent="onSubmit">
            <fieldset :disabled="formDisabled">
              <div class="flex flex-col gap-2.5">
                <div class="flex gap-7 w-full">
                  <validation-provider v-slot="{ errors }" rules="required">
                    <base-input
                      v-model="data.name"
                      label="Имя"
                      placeholder="Александр"
                      class="w-[309px]"
                      :error-messages="errors"
                      name="name"
                    ></base-input>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" rules="required">
                    <base-input
                      v-model="data.surname"
                      label="Фамилия"
                      placeholder="Иванов"
                      :error-messages="errors"
                      class="w-[309px]"
                      name="surname"
                    ></base-input
                  ></validation-provider>
                </div>
                <div>
                  <validation-provider
                    v-slot="{ errors }"
                    rules="required|email"
                  >
                    <base-input
                      v-model="data.email"
                      :error-messages="errors"
                      label="Email"
                      placeholder="alexander@mail.ru"
                      name="email"
                    ></base-input>
                  </validation-provider>
                </div>
                <base-button type="submit" size="large" class="max-w-[121px]"
                  >Сохранить</base-button
                >
              </div>
            </fieldset>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '~/components/base/BaseButton.vue'
import BaseInput from '~/components/base/BaseInput.vue'
import IPlus from '~/components/icons/IPlus.vue'
import { ValidateForm } from '~/config/types'

export default Vue.extend({
  name: 'OrganizationSettings',
  components: { BaseButton, IPlus, BaseInput },
  layout: 'cabinetLayout',
  data: () => ({
    formDisabled: false,
    data: {
      name: '',
      surname: '',
      email: '',
    },
  }),
  computed: {
    form(): ValidateForm {
      return this.$refs.form as ValidateForm
    },
    changePasswordForm(): ValidateForm {
      return this.$refs.changePasswordForm as ValidateForm
    },
    passwordHtmlForm(): HTMLFormElement {
      return this.$refs.passwordHtmlForm as HTMLFormElement
    },
    htmlForm(): HTMLFormElement {
      return this.$refs.htmlForm as HTMLFormElement
    },
  },
  created() {
    this.data = JSON.parse(JSON.stringify(this.$auth.user))
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
        if (this.$auth.user) {
          await this.$axios.patch('/api/user', {
            name: this.data.name,
            surname: this.data.surname,
            email: this.data.email,
            id: this.$auth.user.id,
          })
          this.$auth.fetchUser()
          this.$toast.success('Данные успешно обновлены!')
        }
      } catch (e: any) {
        this.$toast.error('Произошла ошибка. Попробуйте позже')
      } finally {
        this.formDisabled = false
      }
    },
  },
})
</script>

<style lang="scss" scoped></style>
