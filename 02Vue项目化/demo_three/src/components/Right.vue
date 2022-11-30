<template>
    <div class="right">right组件</div>
</template>

<script>
export default {
    // 当提供了 name 属性之后，组件的名称就是 name 属性的值
    // 对比：
    // 1.组件的“注册名称”的主要应用场景：以标签的形式，把注册好的组件，渲染和使用到页面结构之中
    // 2.组件声明时候的 name 名称的主要应用场景：结合<keep-alive>标签实现组件缓存功能；以及在调试工具中看到的name名称
    name: "MyRight",
};
</script>

<style lang="less" scoped>
.right {
    width: 50%;
    height: 200px;
    background-color: antiquewhite;
    padding: 20px;
}
</style>