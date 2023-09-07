<template>
  <div class="flex h-screen">
    <div
      class="flex w-[300px] flex-shrink-0 flex-col p-5 justify-between text-[15px] leading-none h-full"
    >
      <div class="flex flex-col gap-10">
        <nuxt-link to="/" class="flex justify-center"
          ><i-logo :size="200"
        /></nuxt-link>
        <div class="flex flex-col gap-2.5">
          <nuxt-link to="/cabinet">
            <sidebar-button>
              <i-profile-logo :size="24" />
              <div>Профиль</div>
            </sidebar-button>
          </nuxt-link>
          <nuxt-link to="/cabinet/organization">
            <sidebar-button>
              <i-organization size="24" />
              <div>Организация</div>
            </sidebar-button>
          </nuxt-link>
          <nuxt-link to="/cabinet/pavilion-maps">
            <sidebar-button>
              <i-map :size="24" />
              <div>Карты беседок</div>
            </sidebar-button>
          </nuxt-link>
          <nuxt-link to="/cabinet/bookings">
            <sidebar-button>
              <i-history :size="24" />
              <div>История броней</div>
            </sidebar-button></nuxt-link
          >
          <nuxt-link to="/cabinet/settings">
            <sidebar-button>
              <i-settings :size="24" />
              <div>Настройки</div>
            </sidebar-button>
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-col gap-2.5">
        <nuxt-link
          class="flex gap-2.5 items-center py-[13px] pl-4 pr-[27px]"
          to="/cabinet"
        >
          <div class="bg-gray w-9 h-9 rounded-full flex flex-shrink-0"></div>
          <div>
            <div class="text-base leading-none w-full">
              {{ $auth.user.name }} {{ $auth.user.surname }}
            </div>
            <div class="text-gray text-sm leading-none overflow-hidden">
              {{ $auth.user.email }}
            </div>
          </div>
        </nuxt-link>
        <sidebar-button @click.native="logout">
          <i-exit :size="24" />
          <div>Выйти</div>
        </sidebar-button>
      </div>
    </div>
    <div class="p-[30px] bg-background-light w-full">
      <div
        class="p-[60px] bg-background-primary h-full overflow-y-scroll rounded-[20px]"
      >
        <nuxt />
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
import SidebarButton from '~/components/partials/cabinet/SidebarButton.vue'
import IOrganization from '~/components/icons/IOrganization.vue'

export default Vue.extend({
  name: 'CabinetLayout',
  components: {
    ILogo,
    IProfileLogo,
    IHistory,
    IMap,
    ISettings,
    IExit,
    SidebarButton,
    IOrganization,
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
})
</script>

<style lang="scss" scoped>
a.nuxt-link-exact-active button {
  @apply bg-background-secondary text-blue-link;
}
</style>
