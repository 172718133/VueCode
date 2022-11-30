<template>
    <div class="left_container">
        <h2>left组件</h2>
        <hr>
        <router-link to='/main'>前往 Main 主页</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.left_container {
    // width: 100%;
    height: 300px;
    background-color: skyblue;
    padding: 10px;
}
</style>