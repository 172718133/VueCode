<template>
  <div class="box">
    <h1>{{ username }}</h1>
    <button @click="changeName">修改用户名</button>
    <list></list>
    <MyCount :init="6"></MyCount>
    <lifeCycle init="hello"></lifeCycle>
  </div>
</template>

<script>
import list from './components/list.vue'
export default {
  data() {
    return {
      username: 'zs'
    }
  },
  methods: {
    changeName(){
      this.username = 'ls'
    }
  },
  components: {
    list
  }
}
</script>

<style lang="less" scoped>
  .box{
    background-color: antiquewhite;
    h1{
      color: red;
    }
    button{
      font-size: 16px;
    }
    /deep/ h2{
      color: blue;
    }
  }
</style>