<template>
  <div class="flex p-4 gap-4">
    <div>
      <client-only>
        <div
          class="w-[1378px] max-h-[1040px] h-full rounded-[10px] setting-shadow overflow-hidden relative"
        >
          <div class="absolute z-[1] right-0">
            <div class="flex gap-5 justify-end pr-5 pt-5">
              <base-button
                class="max-w-[167px] w-full"
                size="large"
                button-style="primary"
              >
                <nuxt-link to="#">Личный кабинет</nuxt-link>
              </base-button>
              <base-button
                class="w-[170px]"
                size="large"
                button-style="primary"
              >
                <span>Сохранить карту</span>
              </base-button>
            </div>
          </div>
          <yandex-map :coords="coords" :zoom="17" @click="onClick">
            <ymap-marker :coords="coords" marker-id="123" />
          </yandex-map>
        </div>
      </client-only>
    </div>
    <div class="flex flex-col gap-10 rounded-[10px] p-[30px] setting-shadow">
      <div class="flex items-center justify-between gap-[148px]">
        <div class="font-medium text-2xl leading-none">Настройка беседки</div>
        <button>
          <i-close :size="40" />
        </button>
      </div>
      <div class="flex flex-col gap-[15px]">
        <div>
          <base-input
            v-bind="data.name"
            class="max-w-[422px]"
            label="Название беседки"
            placeholder="Беседка “Семейная”"
            name="name"
          />
        </div>
        <div class="flex items-center justify-between text-gray">
          <base-input
            v-bind="data.square"
            class="max-w-[378px] w-full"
            label="Площадь"
            placeholder="72"
            name="square"
          />
          <div
            class="border border-border-gray rounded-[10px] bg-background-primary rounded-l-none h-[54px] flex items-center border-l-0"
          >
            кв/м
          </div>
        </div>
        <div class="flex items-center justify-between text-gray">
          <base-input
            v-bind="data.capacity"
            class="max-w-[378px] w-full"
            label="Вместимость"
            placeholder="120"
            name="capacity"
          />
          <div
            class="border border-border-gray rounded-[10px] bg-background-primary rounded-l-none h-[54px] flex items-center border-l-0"
          >
            чел.
          </div>
        </div>
        <div
          class="flex gap-2.5 p-2.5 border border-border-gray bg-background-primary rounded-[20px]"
        >
          <base-button class="w-[196px]" size="large" button-style="primary">
            <span>Беседка</span>
          </base-button>
          <base-button class="w-[196px]" size="large" button-style="secondary">
            <span>Домик</span>
          </base-button>
        </div>
        <div class="flex items-center justify-between text-gray">
          <base-input
            v-bind="data.sleepingPlace"
            class="max-w-[378px] w-full"
            label="Спальных мест"
            placeholder="72"
            name="sleepingPlace"
          />
          <div
            class="border border-border-gray rounded-[10px] bg-background-primary rounded-l-none h-[54px] flex items-center border-l-0"
          >
            шт.
          </div>
        </div>
        <div class="flex items-center justify-between text-gray">
          <base-input
            v-bind="data.price"
            class="max-w-[378px] w-full custom-placeholder"
            label="Цена"
            placeholder="5000"
            name="price"
          />
          <div
            class="border border-border-gray rounded-[10px] bg-background-primary rounded-l-none h-[54px] flex items-center border-l-0"
          >
            ₽/час
          </div>
        </div>
        <base-button class="w-full" size="large" button-style="secondary">
          <span>Прикрепить фотографии</span>
        </base-button>
        <base-button class="w-full" size="large" button-style="secondary">
          <span>Добавить доп. услуги и удобства</span>
        </base-button>
        <base-button
          class="w-full mt-[136px]"
          size="large"
          button-style="primary"
        >
          <span>Добавить доп. услуги и удобства</span>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IClose from '~/components/icons/IClose.vue'
import BaseInput from '~/components/base/BaseInput.vue'
import BaseButton from '~/components/base/BaseButton.vue'
export default Vue.extend({
  components: {
    IClose,
    BaseInput,
    BaseButton,
  },
  data: () => ({
    coords: [55.84158954990046, 48.968362759580394],
    data: {
      name: '',
      square: '',
      capacity: '',
      sleepingPlace: '',
      price: '',
    },
  }),
  methods: {
    onClick(e: any) {
      this.coords = e.get('coords')
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
.custom-placeholder {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 0px;
}
</style>
