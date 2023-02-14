<template>
  <div class="flex w-full">
    <div class="w-1/2 flex pl-[270px] pt-[100px]">
      <div class="flex flex-col gap-10">
        <div>
          <div class="font-medium text-4xl leading-none">
            Регистрация в Беседки.ру
          </div>
          <div class="text-lg text-gray-dark leading-none mt-[20px]">
            Уже есть аккаунт?
            <nuxt-link class="text-blue-link" to="login">Войти</nuxt-link>
          </div>
        </div>
        <div class="flex flex-col gap-[30px]">
          <div>
            <div class="text-sm leading-none text-gray-dark">Имя</div>
            <input
              type="text"
              placeholder="Александр"
              class="text-gray bg-background-primary mt-[6px] pl-[15px] py-[18px] pr-[10px] border max-w-[420px] w-full border-border-gray rounded-[10px]"
            />
          </div>
          <div>
            <div class="text-sm leading-none text-gray-dark">Фамилия</div>
            <input
              type="text"
              placeholder="Фролов"
              class="text-gray bg-background-primary mt-[6px] pl-[15px] py-[18px] pr-[10px] border max-w-[420px] w-full border-border-gray rounded-[10px]"
            />
          </div>
          <div>
            <div class="text-sm leading-none text-gray-dark">Email</div>
            <input
              type="email"
              placeholder="alex@mail.ru"
              class="text-gray bg-background-primary mt-[6px] pl-[15px] py-[18px] pr-[10px] border max-w-[420px] w-full border-border-gray rounded-[10px]"
            />
          </div>
          <div>
            <div class="text-sm leading-none text-gray-dark">Пароль</div>
            <input
              type="password"
              placeholder="************"
              class="text-gray bg-background-primary mt-[6px] pl-[15px] py-[18px] pr-[10px] border max-w-[420px] w-full border-border-gray rounded-[10px]"
            />
          </div>
        </div>
        <base-button
          type="submit"
          size="large"
          button-style="primary"
          class="max-w-[420px] w-full mt-2.5 bg-button-primary"
        >Зарегистрироваться</base-button>
        <div class="flex flex-col justify-center items-center gap-[30px] mt-2.5 max-w-[420px] w-full">
          <div>Или зарегистрироваться с помощью</div>
          <div class="flex gap-2.5 text-blue-link font-medium">
            <base-button class="w-[164px]" size="large">
              <i-google :size="24"/>
              <span>Google</span>
            </base-button>
            <base-button class="w-[164px]" size="large">
              <i-vk :size="24"/>
              <span>ВКонтакте</span>
            </base-button>
          </div>
        </div>
      </div>
    </div>
    <div :style="{backgroundImage: `url(${require('~/assets/images/signup-bg.svg')})`}" class="w-1/2 h-screen bg-no-repeat bg-cover bg-center">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '~/components/base/BaseButton.vue'
import IVk from "~/components/icons/IVk.vue";
import IGoogle from "~/components/icons/IGoogle.vue";

export default Vue.extend({
  name: 'SignUpPage',
  components: { BaseButton, IVk, IGoogle, },
})
</script>

<style scoped></style>
