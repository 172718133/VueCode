<template>
    <div class="app_container">
        <!-- 头部区域 -->
        <Header title="购物车"></Header>
        <!-- 购物车列表区域 -->
        <Goods
            v-for="item in goods"
            :key="item.id"
            :id="item.id"
            :pic="item.goods_img"
            :price="item.goods_price"
            :state="item.goods_state"
            :title="item.goods_name"
            :count="item.goods_count"
            @stateChange="getNewState"
        ></Goods>
        <!-- 底部结算区域 -->
        <Footer
            :isFull="fullState"
            :total_price="total_price"
            :total_num="total_num"
            @stateChange="getFullState"
        ></Footer>
    </div>
</template>

<script>
// 导入axios包
import axios from "axios";
// 导入header组件
import Header from "@/components/Header/Header.vue";
import Counter from "@/components/Counter/Counter.vue";
import Footer from "@/components/Footer/Footer.vue";
import Goods from "@/components/Goods/Goods.vue";
// 导入 eventBus.js
import bus from "@/components/eventBus.js";
export default {
    data() {
        return {
            // 存放购物车的列表数据
            goods: [],
        };
    },
    computed: {
        fullState() {
            return this.goods.every((item) => item.goods_state);
        },
        total_price() {
            var total_price = this.goods
                .filter((item) => item.goods_state)
                .reduce(
                    (amt, item) => (amt += item.goods_price * item.goods_count),
                    0
                );
            return total_price;
        },
        total_num() {
            return this.goods
                .filter((item) => item.goods_state)
                .reduce((num, item) => (num += item.goods_count), 0);
        },
    },
    methods: {
        async initCartList() {
            // 调接口请求数据
            var { data: res } = await axios.get(
                "https://www.escook.cn/api/cart"
            );
            if (res.status === 200) {
                this.goods = res.list;
                // console.log(this.goods);
                // initTotalInfo();
            }
        },
        getNewState(val) {
            // val: {id: this.id, value: newState}
            this.goods.some((item) => {
                if (item.id === val.id) {
                    item.goods_state = val.value;
                    return true;
                }
            });
        },
        getFullState(val) {
            this.goods.forEach((item) => {
                item.goods_state = val;
            });
        },
    },
    components: {
        Header,
        Goods,
        Footer,
        Counter,
    },
    created() {
        // 调用请求数据的方法
        this.initCartList();
        bus.$on("share", (val) => {
            this.goods.some((item) => {
                if (item.id === val.id) {
                    item.goods_count = val.value;
                    return true;
                }
            });
        });
    },
};
</script>

<style lang="less" scoped>
.app_container {
    // position: relative;
    padding: 45px 0 50px 0;
}
</style>
