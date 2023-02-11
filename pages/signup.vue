<template>
  <div
    :style="{
      'background-image': `url(${require('~/assets/images/signUp-Bg.jpg')})`,
      'background-position': 'right',
      'background-repeat': 'no-repeat',
      'background-size': 'contain',
    }"
    class="pt-[152px] pl-[270px]"
  >
    <div class="flex flex-col max-w-[473px]">
      <div class="font-medium text-4xl leading-none">
        Регистрация в Беседки.ру
      </div>
      <div class="text-lg text-gray-dark leading-none mt-[20px]">
        Уже есть аккаунт?
        <nuxt-link class="text-blue-link" to="login">Войти</nuxt-link>
      </div>
      <div class="flex flex-col mt-[40px] gap-[30px] text-base leading-none ">
        <div class="">
          <div class="text-sm leading-none text-gray-dark">Имя</div>
          <input
            type="text"
            placeholder="Александр"
            class="text-gray bg-background-primary mt-[6px] pl-[15px] py-[18px] border max-w-[420px] w-full border-border-gray rounded-[10px]"
          />
        </div>
        <div>
          <div class="text-sm leading-none text-gray-dark">Фамилия</div>
          <input
            type="text"
            placeholder="Фролов"
            class="text-gray bg-background-primary mt-[6px] pl-[15px] py-[18px] border max-w-[420px] w-full border-border-gray rounded-[10px]"
          />
        </div>
        <div>
          <div class="text-sm leading-none text-gray-dark">Email</div>
          <input
            type="email"
            placeholder="alex@mail.ru"
            class="text-gray bg-background-primary mt-[6px] pl-[15px] py-[18px] border max-w-[420px] w-full border-border-gray rounded-[10px]"
          />
        </div>
        <div>
          <div class="text-sm leading-none text-gray-dark">Пароль</div>
          <input
            type="password"
            placeholder="************"
            class="text-gray bg-background-primary mt-[6px] pl-[15px] py-[18px] border max-w-[420px] w-full border-border-gray rounded-[10px]"
          />
        </div>
        <base-button
          type="submit"
          size="large"
          button-style="primary"
          class="max-w-[420px] w-full mt-2.5"
          >Зарегистрироваться</base-button
        >
        <div class="flex flex-col justify-center items-center gap-[30px] mt-10 max-w-[420px] w-full">
          <div>Или зарегистрироваться с помощью</div>
          <div class="flex gap-2.5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '~/components/base/BaseButton.vue'

export default Vue.extend({
  name: 'SignUpPage',
  components: { BaseButton },
})
</script>

<style scoped></style>
