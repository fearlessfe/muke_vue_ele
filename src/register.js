import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HearderDetail from 'components/header-detail'
import ShopCartList from 'components/shopcart-list'

// 用js的方式显示组件
createAPI(Vue, HearderDetail)
createAPI(Vue, ShopCartList)