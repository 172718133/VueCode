<template>
  <div>
    <br>
    <br>
    <div class="book">一共有{{ books.length }}本图书</div>
    <br>
    <div class="msg">message 的值为：{{ message }}</div>
    <br>
    <button @click="message += '~'">改变 message 的值</button>
  </div>
</template>

<script>
import axios from '@/assets/axios.min.js'
export default {
    props: ['init'],
    data() {
        return {
            message: 'Hello Vue.js',
            books:[]
        }
    },
    methods: {
        show(){
            console.log('调用了 show 方法！');
        },
        async getBooks(){
            const { data:res } = await axios({
                method: 'GET',
                url: 'http://www.liulongbin.top:3006/api/getbooks'
            });
            this.books = res.data;
            // const xhr = new XMLHttpRequest();
            // xhr.addEventListener('load',()=>{
            //     const res = JSON.parse(xhr.responseText);
            //     console.log(res);
            //     this.books = res.data;         
            //     console.log(this.books);
            // });
            // xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks');
            // xhr.send();

        }
    },
    // ***生命周期
    // **组件创建阶段
    // 初始化事件和生命周期函数后执行，组件的props/data/methods尚未被创建，都处于不可用状态
    beforeCreate() {
        // console.log(this.message);
        // console.log(this.init);
        // this.show();
    },
    // 初始化props、data、methods后执行，组件的props/data/methods已创建好，都处于可用状态。但是组件的模板结构尚未生成。
    // 可最早的发送ajax请求
    created(){
        console.log(this.message);
        console.log(this.init);
        this.show();
        this.getBooks();
    },
    // 将要把内存中编译好的html结构渲染到浏览器中，实际浏览器中还没有组件的dom结构
    beforeMount(){
        // const book = document.querySelector('.book');
        // console.log(book);
    },
    // 已经将内存中的html结构渲染到浏览器中
    // 可最早的操作dom函数
    mounted(){
        const book = document.querySelector('.book');
        console.log(book);
    },
    // **组件运行阶段
    // 数据发生变化时，触发beforeUpdate函数；将要根据变化后、最新的数据，重新渲染组件的模板结构
    beforeUpdate(){
        // message最新的值
        console.log(this.message);
        const msg = document.querySelector('.msg');
        // 当前组件的值（还未更新最新的值）
        console.log(msg.innerHTML);
    },
    // 数据已经发生变化，再该方法中操作最新的dom结构
    updated(){
        // message最新的值
        console.log(this.message);
        const msg = document.querySelector('.msg');
        // 当前组件的值（已更新最新的值）
        console.log(msg.innerHTML);
    },
    // 销毁
    destroyed(){
        console.log('destroyed');
    }
}
</script>

<style>

</style>