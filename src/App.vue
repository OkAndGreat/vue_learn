<template>
  <div class="app-container">
    <Header title="购物车"></Header>
    <Goods
        v-for="item in list"
        :key="item.id"
        :id="item.id"
        :title="item.goods_name"
        :pic="item.goods_img"
        :price="item.goods_price"
        :state="item.goods_state"
        :count="item.goods_count"
        @state-change="getNewState"
    ></Goods>
    <Footer :isfull="fullState" @full-change="getFullState"></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/HeaderCom.vue'
import Goods from '@/components/GoodsCom.vue'
import Footer from '@/components/FooterCom.vue'

export default {
  data() {
    return {
      list: []
    }
  },
  computed:{
    fullState() {
      return this.list.every(item => item.goods_state)
    },
  },
  methods: {
    // 封装请求列表数据的方法
    async initCartList() {
      // 调用 axios 的 get 方法，请求列表数据
      const {data: res} = await axios.get('https://www.escook.cn/api/cart')
      // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      if (res.status === 200) {
        console.log(res)
        this.list = res.list
      }
    },
    getNewState(e) {
      this.list.some((item, index) => {
        if (item.id === e.id) {
          this.list[index].goods_state = e.value
          return true
        }
      })
    },
    getFullState(val) {
      this.list.forEach(item => (item.goods_state = val))
    }
  },

  name: 'App',
  components: {
    Header,
    Goods,
    Footer
  },
  created() {
    this.initCartList()
  }
}
</script>

<style>
body {
  margin: 0;
}

.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
