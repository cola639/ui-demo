<template>
  <div class="a">
    <h5
      class="b"
      :data="sdata"
      :style="{ color: sdata.color, fontSize: sdata.fontSize + 'px' }"
    >
      {{ sdata.desc }}
    </h5>
  </div>
</template>

<script>
export default {
  name: 'UISecond',
  props: {
    sdata: Object,
  },
}
</script>

<style scoped>
.a {
  padding: 10px;
}
.b {
  color: coral;
  background-color: lightgreen;
}
</style>
