<template>
  <div class="left_container">
    left组件
    <!-- 在封装组件时，为预留的<slot>提供属性对应的值，这种用法叫做“作用域插槽” -->
    <slot name="left" msg="Hello">
      <h6>这是 left 插槽的默认内容</h6>
    </slot>
    <slot name="dafault" :user="userinfo">
      <h6>这是默认插槽的内容</h6>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {
        username: "zs",
        age: 18,
      },
    };
  },
};
</script>

<style lang="less" scoped>
.left_container {
  width: 50%;
  height: 200px;
  background-color: skyblue;
  padding: 20px;
}
</style>
