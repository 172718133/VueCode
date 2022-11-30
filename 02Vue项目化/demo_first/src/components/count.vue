<template>
  <div>
    <h5>Count 组件</h5>
    <h4>{{ count }}</h4>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
    // props 是自定义属性，允许使用者自定义初始值
    // props 中的数据可以直接在模板结构中使用
    // props 是只读的  不能直接修改
    // props: ['init'],
    props: {
        init: {
            // 如果外界使用该组件时，未指定属性值，则显示该默认值
            default: 0,
            // init 的值类型必须是 Number 数字
            type: Number,
            // 必填项校验
            required: true
        }
    },
    data() {
        return {
            count: this.init
        }
    },
}
</script>

<style>

</style>