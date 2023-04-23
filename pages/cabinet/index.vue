<template>
  <div class="flex font-roboto font-medium h-screen">
    <div
      class="flex flex-col p-5 justify-between text-[15px] leading-none h-full"
    >
      <div class="flex flex-col gap-10">
        <nuxt-link to="/"><i-logo :size="200" /></nuxt-link>
        <div class="flex flex-col gap-2.5">
          <div class="flex items-center gap-4 pl-4 pr-2 py-[13px]">
            <i-profile-logo :size="24" />
            <nuxt-link to="/cabinet/">Профиль</nuxt-link>
          </div>
          <div class="flex items-center gap-4 pl-4 pr-2 py-[13px]">
            <i-map :size="24" />
            <nuxt-link to="/cabinet/">Карты беседок</nuxt-link>
          </div>
          <div class="flex items-center gap-4 pl-4 pr-2 py-[13px]">
            <i-history :size="24" />
            <nuxt-link to="/cabinet/">История броней</nuxt-link>
          </div>
          <div class="flex items-center gap-4 pl-4 pr-2 py-[13px]">
            <i-settings :size="24" />
            <nuxt-link to="/cabinet/">Настройки</nuxt-link>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2.5">
        <div class="flex gap-2.5 items-center py-[13px] pl-4 pr-[27px]">
          <div class="bg-gray w-9 h-9 rounded-full"></div>
          <div>
            <div class="text-base leading-none">Рустем Галимов</div>
            <div class="text-gray text-sm leading-none">galim691@mail.ru</div>
          </div>
        </div>
        <button
          type="button"
          class="flex gap-4 items-center pl-4 pr-2 py-[14px]"
          @click="logout"
        >
          <i-exit :size="24" />
          <div>Выйти</div>
        </button>
      </div>
    </div>
    <div class="px-[29px] py-10 bg-background-light w-full">
      <div
        class="p-[60px] bg-background-primary flex flex-col justify-between gap-[95px]"
      >
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
            <base-button
              size="large"
              button-style="primary"
              class="max-w-[180px]"
              >Редактировать</base-button
            >
          </div>
        </div>
        <div class="flex flex-col gap-10">
          <div
            class="font-rubik font-medium text-[36px] leading-none text-[#000]"
          >
            Карты беседок
          </div>
          <!-- место для PavilionMapsBlock -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ILogo from '~/components/icons/ILogo.vue'
import IProfileLogo from '~/components/icons/IProfileLogo.vue'
import IMap from '~/components/icons/IMap.vue'
import IHistory from '~/components/icons/IHistory.vue'
import ISettings from '~/components/icons/ISettings.vue'
import IExit from '~/components/icons/IExit.vue'
import IPhone from '~/components/icons/IPhone.vue'
import IMail from '~/components/icons/IMail.vue'
import BaseButton from '~/components/base/BaseButton.vue'

export default Vue.extend({
  name: 'Cabinet',
  components: {
    ILogo,
    IProfileLogo,
    IHistory,
    IMap,
    ISettings,
    IExit,
    IPhone,
    IMail,
    BaseButton,
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
})
</script>

<style scoped></style>
