<template>
    <div class="goods_container">
        <div class="goods_item">
            <!-- <input type="checkbox" :checked="state"/> -->
            <span class="input-group-addon">
                <input
                    type="checkbox"
                    :checked="state"
                    aria-label="..."
                    @change="stateChange"
                />
            </span>
            <a href="javascript:;">
                <div class="goods_img">
                    <img class="img" :src="pic" alt="" />
                </div>
                <div class="goods_info">
                    <div class="goods_title">
                        {{ title }}
                    </div>
                    <div class="num">
                        <div class="goods_price">￥{{ price }}</div>
                        <Counter :num="count" :id="id"></Counter>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import Counter from "@/components/Counter/Counter.vue";
export default {
    props: {
        id: {
            require: true,
            type: Number,
        },
        title: {
            default: "",
            type: String,
        },
        pic: {
            default: "",
            type: String,
        },
        price: {
            default: 0,
            type: Number,
        },
        state: {
            default: false,
            type: Boolean,
        },
        count: {
            default: 1,
            type: Number,
        },
    },
    data() {
        return {};
    },
    methods: {
        stateChange(e) {
            // console.log(e);  事件对象e包含选中状态
            const newState = e.target.checked;
            // console.log(this);  this指向该组件，其中包含props自定义属性
            // console.log(id);
            this.$emit("stateChange", { id: this.id, value: newState });
        },
    },
    components: {
        Counter,
    },
};
</script>

<style lang="less" scoped>
.goods_item {
    padding: 10px;
    display: flex;
    align-items: center;
    height: 140px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    a {
        display: flex;
        text-decoration: none;
        font-size: 14px;
        color: #000;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
        font-weight: bold;
        .goods_img {
            // height: 120px;
            // width: 120px;
            margin: 0 10px;
            .img {
                height: 120px;
                width: 120px;
                // width: 100%;
                // height: 100%;
            }
        }
        .goods_info {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            .goods_title {
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
            .num {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .goods_price {
                    color: #dc3545;
                    font-weight: 800;
                }
            }
        }
    }
}
.goods_item:last-child {
    border-bottom: none;
}
</style>
