<template>
  <div class="app_container">
    <div>App组件</div>
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/myLeft.vue'
import Right from '@/components/myRight.vue'
export default {
  components: {
    Left,
    Right
  }
}
</script>

<style lang='less' scoped>
  .box{
    display: flex;
    margin-top: 30px;
  }
</style>
