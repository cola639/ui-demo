<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <UIFirst :sdata="sdata" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},
  data() {
    return {
      sdata: {
        desc: 'Test UI Library',
        color: 'green',
      },
    }
  },
}
</script>
