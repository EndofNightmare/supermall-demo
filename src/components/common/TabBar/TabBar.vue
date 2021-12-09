<template>
  <div id="tab-bar">
<!--    <tab-bar-item></tab-bar-item>-->
<!--    <tab-bar-item></tab-bar-item>-->
<!--    <tab-bar-item></tab-bar-item>-->
<!--    <tab-bar-item></tab-bar-item>-->
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "Tabbar",
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  height: 49px;

  position: fixed; /*绝对定位 相对于(0,0)  右方向为x正方向 下方向为y正方向*/
  left: 0;
  right: 0;
  bottom: 0;

  /*设置阴影*/
  box-shadow: 0px -1px 1px rgba(100,100,100,.2);
}
</style>
