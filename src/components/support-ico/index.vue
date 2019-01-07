<template>
  <span class="support-ico" :class="iconCls"></span>
</template>

<script>
export default {
  name: 'support-ico',
  props: {
    size: {
      type: Number
    },
    type: {
      type: Number
    }
  },
  computed: {
    // 根据传入的尺寸和类型生成对应的背景图
    iconCls() {
      const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      return `icon-${this.size} ${classMap[this.type]}`
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"

  .support-ico
    display inline-block
    background-repeat no-repeat

  .icon-1
    width 12px
    height 12px
    background-size 12px 12px
    &.decrease
      bg-image('decrease_1')
    &.decrease
      bg-image('decrease_1')
    &.decrease
      bg-image('decrease_1')
    &.decrease
      bg-image('decrease_1')
    &.decrease
      bg-image('decrease_1')
  .icon-2
    width 16px
    height 16px
    background-size 16px 16px
    &.decrease
      bg-image('decrease_2')
    &.decrease
      bg-image('decrease_2')
    &.decrease
      bg-image('decrease_2')
    &.decrease
      bg-image('decrease_2')
    &.decrease
      bg-image('decrease_2')
  .icon-3
    width 12px
    height 12px
    background-size 12px 12px
    &.decrease
      bg-image('decrease_3')
    &.decrease
      bg-image('decrease_3')
    &.decrease
      bg-image('decrease_3')
    &.decrease
      bg-image('decrease_3')
    &.decrease
      bg-image('decrease_3')
  .icon-4
    width 16px
    height 16px
    background-size 16px 16px
    &.decrease
      bg-image('decrease_4')
    &.decrease
      bg-image('decrease_4')
    &.decrease
      bg-image('decrease_4')
    &.decrease
      bg-image('decrease_4')
    &.decrease
      bg-image('decrease_4')
  
</style>
