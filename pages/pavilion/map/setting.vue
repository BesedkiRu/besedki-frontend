<template>
  <div class="flex p-5 gap-5 h-screen">
    <pavilions-yandex-map @add-pavilion="onAddPavilion" />

    <validation-observer
      v-if="showSettings"
      ref="form"
      class="w-[482px] h-full flex-shrink-0 rounded-[10px] p-[30px] pr-[18px] overflow-y-scroll shadow-main"
    >
      <form novalidate class="h-full" @submit.prevent="onSubmit">
        <fieldset class="h-full" :disabled="formDisabled">
          <div class="flex flex-col h-full gap-10">
            <div class="flex items-center justify-between">
              <div class="font-medium text-2xl leading-none">
                Настройка беседки
              </div>
              <button type="button" @click="closeSettings">
                <i-close :size="40" />
              </button>
            </div>
            <div class="flex flex-col justify-between flex-grow gap-[15px]">
              <div class="flex flex-col gap-[15px]">
                <validation-provider v-slot="{ errors }" rules="required">
                  <base-input
                    v-model="data.name"
                    label="Название беседки"
                    placeholder="Беседка “Семейная”"
                    :error-messages="errors"
                    name="name"
                  />
                </validation-provider>

                <validation-provider v-slot="{ errors }" rules="required">
                  <base-input
                    v-model="data.square"
                    label="Площадь"
                    placeholder="72"
                    name="square"
                    measure="кв/м"
                    :error-messages="errors"
                    type="number"
                  />
                </validation-provider>

                <pavilion-type-switch v-model="data.type" />

                <validation-provider
                  v-if="data.type === PavilionType.PAVILION"
                  v-slot="{ errors }"
                  rules="required"
                >
                  <base-input
                    v-model="data.capacity"
                    label="Вместимость"
                    placeholder="120"
                    name="capacity"
                    :error-messages="errors"
                    measure="чел."
                    type="number"
                  />
                </validation-provider>
                <validation-provider
                  v-else
                  v-slot="{ errors }"
                  rules="required"
                >
                  <base-input
                    v-model="data.bedrooms"
                    label="Спальных мест"
                    placeholder="72"
                    :error-messages="errors"
                    name="bedrooms"
                    measure="шт."
                    type="number"
                  />
                </validation-provider>
                <validation-provider v-slot="{ errors }" rules="required">
                  <base-input
                    v-model="data.price"
                    label="Цена"
                    placeholder="5000"
                    :error-messages="errors"
                    name="price"
                    measure="₽/час"
                    type="number"
                  />
                </validation-provider>

                <base-button
                  class="w-full"
                  size="large"
                  button-style="secondary"
                >
                  <span>Прикрепить фотографии</span>
                </base-button>
                <base-button
                  class="w-full"
                  size="large"
                  button-style="secondary"
                >
                  <span>Добавить доп. услуги и удобства</span>
                </base-button>
              </div>
              <base-button
                type="submit"
                class="w-full"
                size="large"
                button-style="primary"
              >
                Сохранить настройки
              </base-button>
            </div>
          </div>
        </fieldset>
      </form>
    </validation-observer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IClose from '~/components/icons/IClose.vue'
import BaseInput from '~/components/base/BaseInput.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import { ValidateForm, DadataSuggestion } from '~/config/types'
import { PavilionType } from '~/config/enums'
import PavilionTypeSwitch from '~/components/partials/pavilionSettings/PavilionTypeSwitch.vue'
import PavilionsYandexMap from '~/components/partials/pavilion/YandexMap.vue'

export default Vue.extend({
  components: {
    PavilionsYandexMap,
    IClose,
    BaseInput,
    BaseButton,
    PavilionTypeSwitch,
  },
  data: () => ({
    formDisabled: false,
    showSettings: false,
    data: {
      name: '',
      square: '',
      coords: [] as number[],
      capacity: '',
      bedrooms: '',
      type: PavilionType.PAVILION as PavilionType,
      extraServices: [],
      images: [],
      price: '',
      pavilionMap: 1,
    },
    selectedSuggestion: null as null | DadataSuggestion,
    PavilionType,
  }),
  computed: {
    form(): ValidateForm {
      return this.$refs.form as ValidateForm
    },
  },
  created() {
    // this.data.pavilionMap = this.
  },
  methods: {
    async onSubmit() {
      const isValid = await this.form.validate()
      if (!isValid) {
        this.$toast.error('Проверьте корректность данных', {
          position: 'top-left',
        })
      }
      try {
        await this.$axios.post('/api/pavilion/create', {
          data: this.data,
        })
        this.$toast.success('Беседка успешно создана!')
      } catch (e: any) {
        this.$toast.error('Произошла ошибка. Попробуйте позже')
      }
    },
    onAddPavilion(coords: number[]) {
      this.showSettings = true
      this.data.coords = coords
    },
    closeSettings() {
      this.showSettings = false
      this.$forceUpdate()
    },
  },
})
</script>
<style lang="scss" scoped></style>
