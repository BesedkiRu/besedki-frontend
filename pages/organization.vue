<template>
  <div class="flex w-full">
    <div class="w-1/2 flex pl-[270px] pt-[100px]">
      <validation-observer ref="form">
        <form novalidate @submit.prevent="onSubmit">
          <fieldset :disabled="formDisabled">
            <div class="flex flex-col gap-10">
              <div>
                <div class="font-medium text-4xl leading-none">
                  Создание организации
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <validation-provider v-slot="{ errors }" rules="required">
                  <base-input
                    v-model="data.orgName"
                    class="max-w-[420px]"
                    label="Наименование организации"
                    :error-messages="errors"
                    name="orgName"
                    placeholder="ООО “Беседки ру”"
                  />
                </validation-provider>
                <validation-provider v-slot="{ errors }" rules="required">
                  <base-input
                    v-model="data.fullName"
                    class="max-w-[420px]"
                    label="ФИО руководителя"
                    :error-messages="errors"
                    name="fullName"
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
export default Vue.extend({
  name: 'OrganizationPage',
  components: { BaseButton, BaseInput },
  data() {
    return {
      formDisabled: false,
      data: {
        orgName: '',
        fullName: '',
        email: '',
        phone: '',
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
      }
    },
  },
})
</script>
