<template>
  <div>
    <router-view></router-view>

    <div class="bottom_bar">
      <div @click="onBottomHomeClicked()" ref="home">首页</div>
      <div @click="onBottomUserClicked()" ref="user">我的</div>
    </div>
    <!-- 使用 vant Tabbar 区域 -->
<!--    <van-tabbar route>-->
<!--      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>-->
<!--      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>-->
<!--    </van-tabbar>-->
  </div>
</template>

<script>
export default {
  methods: {
    onBottomHomeClicked() {
      this.$refs.home.style.color = '#1d7bff'
      this.$refs.user.style.color = 'black'
      this.$router.replace('/home')
    },
    onBottomUserClicked() {
      this.$refs.home.style.color = 'black'
      this.$refs.user.style.color = '#1d7bff'
      this.$router.replace('/user')
    }
  }
}
</script>

<style scoped lang="less">
.bottom_bar {
  display: flex;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  justify-content: space-between;

  div {
    text-align: center;
    //让文字水平垂直居中
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-top: #ebedf0 1px solid;

    &:first-child{
      color: #1d7bff;
    }
  }
}
</style>