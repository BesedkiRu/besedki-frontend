<template>
  <div class="p-[60px] bg-background-primary flex flex-col gap-[95px] h-full">
    <div class="flex gap-[75px]">
      <div class="w-[262px] h-[249px] bg-gray rounded-full"></div>
      <div class="flex flex-col gap-[30px]">
        <div class="text-[60px] leading-none">ООО Лебяжье</div>
        <div class="flex flex-col gap-5 text-[24px] leading-none">
          <div class="flex gap-[15px] items-center">
            <i-phone :size="30" />
            <div>+7 (876) 676-78-89</div>
          </div>
          <div class="flex gap-[15px] items-center">
            <i-mail :size="30" />
            <div>besedka.kzn@lebyazie.ru</div>
          </div>
        </div>
        <base-button size="large" button-style="primary" class="max-w-[180px]"
          >Редактировать</base-button
        >
      </div>
    </div>
    <div class="flex flex-col gap-10">
      <div class="font-rubik font-medium text-[36px] leading-none text-[#000]">
        Карты беседок
      </div>
      <!-- место для PavilionMapsBlock -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IPhone from '~/components/icons/IPhone.vue'
import IMail from '~/components/icons/IMail.vue'
import BaseButton from '~/components/base/BaseButton.vue'

export default Vue.extend({
  name: 'CabinetPage',
  components: {
    IPhone,
    IMail,
    BaseButton,
  },
  layout: 'cabinetLayout',
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
})
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}
</style>
