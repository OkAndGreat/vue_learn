<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn  btn-light btn-sm" @click="sub">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ count }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
  </div>
</template>

<script>

export default {
  methods: {
    add() {
      console.log('count' + this.count)
      const obj = {id: this.id, value: this.count + 1}
      this.$bus.$emit("countChange", obj)
    },
    sub() {
      if (this.count <= 0) return
      const obj = {id: this.id, value: this.count - 1}
      this.$bus.$emit("countChange", obj)
    }
  },
  props: {
    count: {
      type: Number,
      default: 1
    },
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>