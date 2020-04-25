<template>
  <div class="element-content">
    <div class="cousorul-warper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <h2>{{$route.params.id}}</h2>
  </div>
</template>

<script type="text/ecmascript-6">
import { Swipe, SwipeItem } from 'vant';
export default {
  name: "",
  data: () => ({}),
  created() {},
  mounted() {},
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  methods: {}
};
</script>
<style scoped>
.cousorul-warper{
  height: 220px;
  overflow: hidden;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 220px;
  text-align: center;
  background-color: #39a9ed;
}
</style>