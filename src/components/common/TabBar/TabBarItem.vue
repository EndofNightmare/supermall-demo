<template>
<!--  不能写在App.vue中 因为其中可能有多个<tab-bar-item>-->
  <div class="tab-bar-item" @click="itemClick">
    <!--  具名插槽 -->
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
<!--    这样写class不会生效 因为slot会替换，所以考虑用div包裹，将样式作用于div-->

<!--    <div :class="{active: isActive}">-->
<!--      <slot name="item-text"></slot>-->
<!--    </div>-->

    <!--动态绑定style 三目运算符-->
<!--    <div :style="this.isActive ? {color: this.activeColor} :{}"></div>-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
<!--  <img src="../../assets/img/tabbar/home.svg" alt="">-->
<!--  <div>首页</div>-->
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      // isActive: true
    }
  },
  //计算属性由于省略了getter、setter,所以是函数的形式
  computed:{
    isActive(){
      //哪一个路由活跃
      // console.log(this.path)
      // console.log(this.$route.path)
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} :{}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;  /* flex 平分*/
    text-align: center; /* 文字居中 */
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle; /*消除照片下面的3px*/
    margin-bottom: 2px;
  }
  .active {
    color: red;
  }
</style>
