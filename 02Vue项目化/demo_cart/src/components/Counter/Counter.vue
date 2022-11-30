<template>
    <div class="count_container">
        <div class="btn less">-</div>
        <div class="num">{{ num }}</div>
        <div class="btn add" @click="add">+</div>
    </div>
</template>

<script>
import bus from "@/components/eventBus.js";
export default {
    props: {
        id: {
            require: true,
            type: Number,
        },
        num: {
            default: 1,
            type: Number,
        },
    },
    methods: {
        add() {
            const obj = { id: this.id, value: this.num + 1 };
            bus.$emit("share", obj);
        },
    },
};
</script>

<style lang="less" scoped>
.count_container {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.num {
    padding: 2px 10px;
    border-radius: 2px;
    border: 1px solid #ccc;
}
.btn {
    width: 30px;
    // line-height: 30px;
    font-size: 20px;
    margin: 0;
    padding: 0;
}
</style>