<template>
  <div id="main-tabbar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <!-- 具名插槽 与slot标签中的name属性相对应 -->
        <!-- DOM中使用别名 ～ -->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>

    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "@/components/common/TabBar/TabBar";
import TabBarItem from "@/components/common/TabBar/TabBarItem";
export default {
  name: 'MainTabBar',
  //组件注册
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
/*在style中使用import的导入方式  @import url() ;*/
/* @import "assets/css/base.css"; */
/* @import url(../../../assets/css/base.css); */

@import '~assets/css/base.css'

</style>
