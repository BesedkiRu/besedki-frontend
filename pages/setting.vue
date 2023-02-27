<template>
  <client-only>
    <div class="w-[1000px] h-[700px]">
      <yandex-map :coords="coords" :zoom="17" @click="onClick">
        <ymap-marker :coords="coords" marker-id="123" />
      </yandex-map>
    </div>
  </client-only>
</template>

<script>
export default {
  data: () => ({
    coords: [55.84158954990046, 48.968362759580394],
  }),
  methods: {
    onClick(e) {
      this.coords = e.get('coords')
    },
  },
}
</script>
<style lang="scss" scoped>
.ymap-container {
  height: 100%;
}
</style>
