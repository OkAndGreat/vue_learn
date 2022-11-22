<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed/>

    <div class="home-content">
      <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <ArticleInfo
              v-for="item in artlist"
              :key="item.id"
              :title="item.title"
              :author="item.aut_name"
              :cmt-count="item.comm_count"
              :time="item.pubdate"
              :cover="item.cover"
          ></ArticleInfo>
        </van-list>
      </van-pull-refresh>
    </div>

  </div>
</template>

<script>
import ArticleInfo from '@/components/Article/ArticleInfo'
import {getArticleListAPI} from "@/network/API";

export default {
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      // 文章的数组
      artlist: [],
      // 是否正在加载下一页数据，如果 loading 为 true，则不会反复触发 load 事件
      // 每当下一页数据请求回来之后，千万要记得，把 loading 从 true 改为 false
      loading: false,
      // 所有数据是否加载完毕了，如果没有更多数据了，一定要把 finished 改成 true
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  components: {
    ArticleInfo
  },
  created() {
    this.initArticleList()
  },
  methods: {
    async initArticleList(isRefresh) {
      const {data: res} = await getArticleListAPI(this.page, this.limit)
      console.log(res)

      if (isRefresh) {
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }


      if (res.length === 0) {
        // 证明没有下一页数据了，直接把 finished 改为 true，表示数据加载完了！
        this.finished = true
      }
    },
    onLoad() {
      console.log('触发了 load 事件！')
      // 1. 让页码值 +1
      this.page++
      // 2. 重新请求接口获取数据
      this.initArticleList()
    },
    // 下拉刷新的处理函数
    onRefresh() {
      console.log('触发了下拉刷新！')
      // 1. 让页码值 +1
      this.page++
      // 2. 重新请求接口获取数据
      this.initArticleList(true)
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  .van-nav-bar {
    background-color: #007bff;
  }

  /deep/ .van-nav-bar__title {
    color: white;
  }

  .home-content {
    padding-top: 46px;
    padding-bottom: 50px;
  }
}
</style>