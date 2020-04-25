<template>
  <div class="element-content">
    <div class="order-warper">
      <ul>
        <li v-for="i in 5" :key="i" class="order-warper__item">
          <nuxt-link :to="'/detail/' + i ">
            <img src="../assets/images/list-img.jpg" alt="">
            <div class="descaptions">
              <div class="title-des">五一可订|平谷石林峡+采草莓休闲一日游（50%空座率+踏青）</div>
              <div class="play-numbers">6.0分|月销售20份</div>
              <div class="adress-group">
                <span class="adress">出发地：北京</span>
                <span class="adress">￥<em class="moneys">180</em>元起</span>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "orderList",
  data: () => ({}),
  props: {
    measg: {
      default: "",
      type: String
    }
  },
  created() {},
  mounted() {},
  components: {},
  methods: {}
};
</script>
<style scoped>
.order-warper__item{
  margin-bottom: 20px;
}
.order-warper__item img{
  height: 100px;
  width: 100px;
  border-radius: 8px;
    margin-right: 12px;
}
.order-warper__item a{
  display: flex;
}
.descaptions{
  font-size: 14px;
  color: #212121;
  margin-bottom: 6px;
}
.adress{
  color: #9e9e9e;
  font-size: 12px;
}
.moneys{
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: #ff8300;
}
.play-numbers{
  margin-top: 5px;
}
.adress-group{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>