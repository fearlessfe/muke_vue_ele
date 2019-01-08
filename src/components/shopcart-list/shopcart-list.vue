<template>
  <transition name="fade">
    <cube-popup
      :mask-closable=true
      v-show="visible"
      @mask-click="maskClick"
      position="bottom"
      type="shopcart-list"
      :z-index=90
    >
      <transition name="move" @after-leave="afterLeave">
        <div v-show="visible">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <cube-scroll class="list-content" ref="listContent">
            <ul>
              <li
                class="food"
                v-for="(food, index) in selectFoods"
                :key="index"
              >
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>￥{{food.price*food.count}}</span>
                </div>
                <div class="cart-control-wrapper">
                  <cart-control @add="onAdd" :food="food"></cart-control>
                </div>
              </li>
            </ul>
          </cube-scroll>
        </div>
      </transition>
    </cube-popup>
  </transition>
</template>

<script>
  import CartControl from 'components/cartcontrol'
  import popupMixin from 'common/mixins/popup'

  const EVENT_SHOW = 'show'
  const EVENT_ADD = 'add'
  const EVENT_LEAVE = 'leave'

  export default {
    name: 'shopcart-list',
    mixins: [popupMixin],
    props: {
      selectFoods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {
      this.$on(EVENT_SHOW, () => {
        this.$nextTick(() => {
          this.$ref.listContent.refresh()
        })
      })
    },
    methods: {
      onAdd(target) {
        this.$emit(EVENT_ADD, target)
      },
      afterLeave() {
        this.$emit(EVENT_LEAVE)
      },
      mastClick() {
        this.hide()
      },
      empty() {
        this.dialogComp = this.$createDialog({
          type: 'confirm',
          content: '清空购物车？',
          $events: {
            confirm: () => {
              this.selectFoods.forEach((food) => {
                food.count = 0
              })
              this.hide()
            }
          }
        })
        this.dialogComp.show()
      }
    },
    components: {
      CartControl
    }
  }
</script>