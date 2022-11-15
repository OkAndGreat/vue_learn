<template>
  <div class="footer-container">
    <!-- 左侧的全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="cbFull" :checked="isfull" @change="fullChange"/>
      <label class="custom-control-label" for="cbFull">全选</label>
    </div>

    <!-- 中间的合计 -->
    <div>
      <span>合计：</span>
      <span class="total-price">￥{{ 0 }}</span>
    </div>

    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary btn-settle">结算（{{ 0 }}）</button>
  </div>
</template>

<script>
export default {
  methods: {
    // 监听到了全选的状态变化
    fullChange(e) {
      this.$emit('full-change', e.target.checked)
    }
  },
  props: {
    isfull: {
      type: Boolean,
      default: true
    },
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-checkbox {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

#cbFull {
  margin-right: 5px;
}

.btn-settle {
  margin-right: 10px;
  height: 80%;
  min-width: 110px;
  border-radius: 25px;
  font-size: 12px;
}

.total-price {
  font-weight: bold;
  font-size: 14px;
  color: red;
}
</style>
