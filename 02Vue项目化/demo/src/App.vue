<template>
    <div class="app">
        <h1>APP组件</h1>
    </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
export default {
    data() {},
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