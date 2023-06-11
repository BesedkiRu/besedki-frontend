<template>
  <div class="flex justify-center items-center h-screen">
    <div class="square-move-3"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GoogleCallbackPage',
  auth: false,
  async created() {
    if (process.client) {
      const code = this.$route.query.code
      const scopes = this.$route.query.scope?.toString()?.split(' ')
      if (!scopes) {
        await this.closePageError()
        return
      }
      try {
        const response = await this.$axios.post('/api/auth/social', {
          social: 'google',
          code,
        })
        await this.$auth.setUserToken(
          response.data.access_token,
          response.data.refresh_token
        )
        await this.$auth.fetchUser()
        await this.$router.push('/cabinet')
      } catch (e) {
        await this.closePageError()
      }
    }
  },
  methods: {
    async closePageError() {
      this.$toast.error('Ошибка авторизации. Попробуйте позже.')
      await this.$router.push('/login')
    },
  },
})
</script>

<style lang="scss" scoped>
.square-move-3 {
  --size: 50px;
  --color: #2563ee;
  --accent-opacity: 0.25;
  --animation-timing-function: linear;
  --animation-duration: 2s;
  position: relative;
  width: var(--size);
  height: var(--size);
}

.square-move-3::before,
.square-move-3::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background-color: var(--color);
  transform: translate(0%, 0%);
  animation: var(--animation-timing-function) var(--animation-duration) infinite
    square-move-3-animation;
}

.square-move-3::before {
  opacity: var(--accent-opacity);
  animation-delay: calc(var(--animation-duration) * 0.125);
}

@keyframes square-move-3-animation {
  0% {
    transform: translate(0%, 0%);
  }

  12.5% {
    transform: translate(100%, 0%);
  }

  25% {
    transform: translate(100%, 0%);
  }

  37.5% {
    transform: translate(100%, 100%);
  }

  50% {
    transform: translate(100%, 100%);
  }

  62.5% {
    transform: translate(0%, 100%);
  }

  75% {
    transform: translate(0%, 100%);
  }

  87.5% {
    transform: translate(0%, 0%);
  }

  100% {
    transform: translate(0%, 0%);
  }
}
</style>
