<template>
  <div class="left_container">
    <div>left组件</div>
    <button @click="getInfo">get</button>
  </div>
</template>

<script>
export default {
  methods: {
    async getInfo () {
      const { data: res } = await this.$http.get('/api/get')
      console.log(res)
    }
  }
}
</script>

<style lang='less' scoped>
  .left_container{
    min-height: 200px;
    background-color: aquamarine;
    flex: 1;
  }
</style>
