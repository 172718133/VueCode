<template>
  <div class="right_container">
    <div>right组件</div>
    <button @click="postInfo">post</button>
  </div>
</template>

<script>
export default {
  methods: {
    async postInfo () {
      const { data: res } = await this.$http.post('/api/post', { name: 'zs' })
      console.log(res)
    }
  }
}
</script>

<style lang='less' scoped>
  .right_container{
    min-height: 200px;
    background-color: antiquewhite;
    flex: 1;
  }
</style>
