<template>
  <div class="flex w-full">
    <div class="w-1/2 flex justify-center items-center">
      <validation-observer ref="form">
        <form ref="htmlForm" novalidate @submit.prevent="onSubmit">
          <fieldset :disabled="formDisabled">
            <div class="flex flex-col gap-10">
              <div class="font-medium text-4xl leading-none">
                Создание карты беседок
              </div>
              <div class="flex flex-col gap-4">
                <validation-provider v-slot="{ errors }" rules="required">
                  <base-input
                    v-model="data.name"
                    class="max-w-[420px]"
                    label="Название"
                    :error-messages="errors"
                    name="name"
                    placeholder="База отдыха “Чайка”"
                  />
                </validation-provider>
                <validation-provider v-slot="{ errors }" rules="required">
                  <base-input
                    v-model="data.address"
                    class="max-w-[420px]"
                    label="Адрес"
                    :error-messages="errors"
                    name="address"
                    placeholder="Респ. Татарстан, г. Казань, ул. Пушкина 152"
                  />
                </validation-provider>
              </div>
              <base-button
                type="submit"
                size="large"
                button-style="primary"
                class="max-w-[420px] w-full"
                >Создать карту</base-button
              >
            </div>
          </fieldset>
        </form>
      </validation-observer>
    </div>
    <div
      :style="{
        backgroundImage: `url(${require('~/assets/images/createMapBg.svg')})`,
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
  name: 'CreateMap',
  components: { BaseInput, BaseButton },
  data() {
    return {
      formDisabled: false,
      data: {
        name: '',
        address: '',
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
      }
      try {
        await this.$axios.post('/api/pavilion_map/create', this.data)
        this.htmlForm.reset()
        this.$toast.success('Карта успешно создана')
      } catch (e) {
        this.$toast.error('Произошла ошибка. Попробуйте позже')
      }
    },
  },
})
</script>

<style scoped></style>
