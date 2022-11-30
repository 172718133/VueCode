<template>
    <div class="movie_container">
      <!-- this.$route 是路由的“参数对象” -->
      <!-- this.$router 是路由的“导航对象” -->
      <h2 >movie组件 --- {{$route.params.mid}} --- {{mid}}</h2>
      <button @click="showThis">this</button>
    </div>
</template>

<script>
export default {
  props:['mid'],
  data() {
    return {

    }
  },
  methods: {
    showThis(){
      console.log(this);
    }
  }
};
</script>

<style lang="less" scoped>
.movie_container {
    // width: 100%;
    height: 300px;
    background-color: skyblue;
    padding: 10px;
}
</style>