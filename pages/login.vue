<template>
    <div
      :style="{
        'background-image': `url(${require('~/assets/images/login-Bg.jpg')})`,
        'background-position': 'right',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
      }"
      class="pt-[152px] pl-[270px] pb-[261px]"
    >
        <div class="flex flex-col max-w-[473px]">
            <div class="font-medium text-4xl leading-none">
                Вход в Беседки.ру
            </div>
            <div class="text-lg text-gray-dark leading-none mt-[20px]">
                Ещё нет аккаунта?
                <nuxt-link class="text-blue-link" to="signup">Зарегистрироваться</nuxt-link>
            </div>
            <div class="flex flex-col mt-[40px] gap-[30px] text-base leading-none">
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
                <base-button
                    type="submit"
                    size="large"
                    button-style="primary"
                    class="max-w-[420px] w-full mt-2.5 bg-button-primary"
                >Войти</base-button
                >
                <div class="flex flex-col justify-center items-center gap-[30px] mt-2.5 max-w-[420px] w-full">
                    <div>Или войти с помощью</div>
                    <div class="flex gap-2.5 text-blue-link font-medium">
                        <base-button class="px-[24.5px] py-2.5"><img src="~/assets/images/icons/Google.svg" alt="">Google</base-button>
                        <base-button class="px-[24.5px] py-2.5"><img src="~/assets/images/icons/VK.svg" alt="">ВКонтакте</base-button>
                    </div>
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