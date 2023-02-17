<template>
  <div
    class="flex gap-[100px] justify-center items-center bg-background-index h-screen"
  >
    <div class="flex flex-col gap-[50px] justify-center text-lg leading-none">
      <div
        class="text-black font-semibold text-[60px] leading-none max-w-[782px]"
      >
        Эта страница пока находится в разработке
      </div>
      <div>
        <nuxt-link to="/signup">
          <base-button size="large"
            >Перейти на страницу регистрации</base-button
          >
        </nuxt-link>
      </div>
      <div>
        <div class="text-gray">Другие доступные страницы:</div>
        <ul class="mt-6 list-disc pl-5 text-blue-link flex flex-col gap-2.5">
          <li><nuxt-link to="/login">Авторизация</nuxt-link></li>
          <li><nuxt-link to="/map">Создание карты беседок</nuxt-link></li>
          <li>
            <nuxt-link to="/organization">Создания организации</nuxt-link>
          </li>
          <li><nuxt-link to="/setting">Настройка беседки</nuxt-link></li>
        </ul>
      </div>
    </div>
    <div>
      <component
        :is="require('~/assets/images/index-bg.svg?inline')"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '~/components/base/BaseButton.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { BaseButton },
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
})
</script>
