<template>
    <div class="app">
        <h1>APP组件</h1>
        <hr />
        <button @click="comName = 'Left'">展示Left</button>
        <button @click="comName = 'Right'">展示Right</button>
        <!-- keep-alive有属性include（指定哪些组件可以显示）和exclude（指定哪些组件不显示），但是不能同时使用两个属性 -->
        <keep-alive class="box">
            <component :is="comName"></component>
        </keep-alive>
    </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
export default {
    data() {
        return {
            comName: "Left",
        };
    },
    components: {
        Left,
        Right,
    },
};
</script>

<style lang="less" scoped>
.box {
    display: flex;
    justify-content: space-between;
}
</style>