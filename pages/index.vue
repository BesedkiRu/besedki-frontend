<template>
  <div>
    <h1 class="text-2xl font-bold">Привет это Беседки.ру с башкой</h1>
    <nuxt-link to="signup">На страницу регистрации</nuxt-link>
    <base-button v-if="$auth.loggedIn" @click="logout">Выйти</base-button>
    <div>
      {{ $auth.user }}
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
