<template>
    <div class="right_container">
        <h2>right组件</h2>
        <div class="link">
            <router-link to='/right/tab1'>tab1</router-link>
            <router-link to='/right/tab2'>tab2</router-link>
        </div>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
    .right_container {
        height: 300px;
        background-color: antiquewhite;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
    a{
        margin: 10px;
    }
</style>