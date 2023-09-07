<template>
  <div class="flex w-full">
    <div class="w-1/2 flex justify-center items-center">
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
                    :suggestions="suggestions"
                    placeholder="Респ. Татарстан, г. Казань, ул. Пушкина 152"
                    @choose-suggestion="onChooseSuggestion"
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
import { DadataSuggestion, ValidateForm } from '~/config/types'
import IArrow from '~/components/icons/IArrow.vue'

export default Vue.extend({
  name: 'CreateMapPage',
  components: { BaseInput, BaseButton, IArrow },
  data() {
    return {
      formDisabled: false,
      data: {
        name: '',
        address: '',
      },
      debouncedGetSuggestions: null as any,
      selectedSuggestion: null as null | DadataSuggestion,
      suggestions: [] as DadataSuggestion[],
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
  watch: {
    'data.address'() {
      this.debouncedGetSuggestions()
    },
  },
  created() {
    this.debouncedGetSuggestions = this._.debounce(this.getSuggestions, 500)
  },
  methods: {
    async onSubmit() {
      const isValid = await this.form.validate()
      if (!this.selectedSuggestion) {
        this.$toast.info('Выберите адрес из автозаполнения')
        return
      }
      if (!isValid) {
        this.$toast.error('Проверьте корректность данных')
        return
      }
      try {
        await this.$axios.post('/api/pavilion_map/create', {
          ...this.data,
          coords: [
            parseFloat(this.selectedSuggestion.data.geo_lat),
            parseFloat(this.selectedSuggestion.data.geo_lon),
          ],
        })
        this.htmlForm.reset()
        this.$toast.success('Карта успешно создана')
      } catch (e) {
        this.$toast.error('Произошла ошибка. Попробуйте позже')
      }
    },
    async getSuggestions() {
      const pureAxios = this.$axios.create()
      try {
        const response = await pureAxios.post(
          'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
          { query: this.data.address },
          {
            headers: {
              Authorization: 'Token ' + this.$config.DADATA_TOKEN,
            },
          }
        )
        this.suggestions = response.data.suggestions
      } catch (e) {}
    },
    onChooseSuggestion(suggestion: DadataSuggestion) {
      this.selectedSuggestion = suggestion
    },
  },
})
</script>

<style scoped></style>
