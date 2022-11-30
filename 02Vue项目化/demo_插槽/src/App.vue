<template>
  <div class="app">
    <h1 v-color="color">APP组件</h1>
    <button @click="color = 'green'">改变 v-color 的颜色</button>
    <div class="box">
      <Left>
        <!-- 默认情况下，使用组件的时候，会默认把内容填充到名为 default
                的插槽之中 如果指定名称，需使用 v-slot: 指令，后加插槽名称
                必须使用在 template 标签上，简写为# -->
        <template #left="scope">
          <h3>title</h3>
          <div>{{ scope.msg }}</div>
        </template>
        <template #dafault="{ user }">
          <h3>content</h3>
          <div>{{ user.username }}</div>
        </template>
      </Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
Vue.directive("color", function (el, binding) {
  el.style.color = binding.value;
});
export default {
  data() {
    return {
      color: "blue",
    };
  },
  components: {
    Left,
    Right,
  },
  // 私有自定义属性节点
  // directives: {
  //     // 自定义属性的名称，使用时为v-xxx
  //     // color: {
  //     //     // 绑定bind函数，绑上之后立即生效，影响el元素
  //     //     bind(el, binding) {
  //     //         console.log(binding);
  //     //         el.style.color = binding.value;
  //     //     },
  //     //     update(el, binding) {
  //     //         console.log(binding);
  //     //         el.style.color = binding.value;
  //     //     },
  //     // },
  //     color(el, binding) {
  //         el.style.color = binding.value;
  //     },
  // },
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  align-content: center;
  // justify-content: space-between;
}
</style>
