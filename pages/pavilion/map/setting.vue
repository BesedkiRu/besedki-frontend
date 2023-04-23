<template>
  <div class="flex p-5 gap-5 h-screen">
    <client-only>
      <div
        class="w-full h-full rounded-[10px] setting-shadow overflow-hidden relative"
      >
        <div class="absolute z-[1] right-0">
          <div class="flex gap-5 justify-end pr-5 pt-5">
            <base-button
              class="max-w-[167px] w-full"
              size="large"
              button-style="primary"
            >
              <nuxt-link to="/cabinet/">Личный кабинет</nuxt-link>
            </base-button>
            <base-button class="w-[170px]" size="large" button-style="primary">
              <span>Сохранить карту</span>
            </base-button>
          </div>
        </div>
        <yandex-map
          :controls="['zoomControl']"
          :coords="coords"
          :zoom="17"
          @click="onClick"
        >
          <ymap-marker :coords="coords" marker-id="123" />
        </yandex-map>
      </div>
    </client-only>

    <validation-observer
      v-if="active"
      ref="form"
      class="w-[482px] h-full flex-shrink-0 rounded-[10px] p-[30px] pr-[18px] setting-shadow overflow-y-scroll"
    >
      <form novalidate class="h-full" @submit.prevent="onSubmit">
        <fieldset class="h-full" :disabled="formDisabled">
          <div class="flex flex-col h-full gap-10">
            <div class="flex items-center justify-between">
              <div class="font-medium text-2xl leading-none">
                Настройка беседки
              </div>
              <button type="button" @click="active = false">
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
import { ValidateForm } from '~/config/types'
import { PavilionType } from '~/config/enums'
import PavilionTypeSwitch from '~/components/partials/pavilionSettings/PavilionTypeSwitch.vue'
export default Vue.extend({
  components: {
    IClose,
    BaseInput,
    BaseButton,
    PavilionTypeSwitch,
  },
  data: () => ({
    coords: [55.84158954990046, 48.968362759580394],
    formDisabled: false,
    active: true,
    data: {
      name: '',
      square: '',
      capacity: '',
      bedrooms: '',
      type: PavilionType.PAVILION as PavilionType,
      price: '',
      pavilionMap: 1,
    },
    PavilionType,
  }),
  computed: {
    form(): ValidateForm {
      return this.$refs.form as ValidateForm
    },
  },
  methods: {
    onClick(e: any) {
      this.coords = e.get('coords')
    },
    closeBar(): any {},
    async onSubmit() {
      const isValid = await this.form.validate()
      if (!isValid) {
        this.$toast.error('Проверьте корректность данных', {
          position: 'top-left',
        })
        return
      }
      try {
        // const response = await this.$axios.post('/api/auth/signup', this.data)
      } catch (e) {
        this.$toast.error('Произошла ошибка. Попробуйте позже')
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.ymap-container {
  height: 100%;
}
.setting-shadow {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
}
</style>
