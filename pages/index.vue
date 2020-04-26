<template>
  <div class="element-content">
    <header>
      <nav class="nav-group">
        <ul class="nav-list">
          <li>
            <van-icon name="arrow-left" size="18" />
          </li>
          <li>
            <van-icon name="search" color="#333" size="14" class="search-icons" />
            <input type="text" class="from-item" placeholder="景点/目的地/主题" />
          </li>
          <li>
            <NuxtLink to="/citybar">北京</NuxtLink>
            <van-icon name="arrow-down" size="18" />
          </li>
        </ul>
      </nav>
    </header>
    <div class="jumbtion">
      <div class="list-plane">
        <h2>必游景点推荐</h2>
        <div class="tj-plane">
          <van-row gutter="20">
            <van-col span="8" v-for="i in 3" :key="i">
              <div class="tj-plane__items">
                <img
                  src="https://imgs.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_222x168_93cb017d.jpg"
                  alt
                />
                <span class="title">八达岭长城</span>
                <span class="lines">
                  <em>30</em>条线路
                </span>
              </div>
            </van-col>
          </van-row>
          <van-button type="primary" block class="btn-days">北京全部一日游</van-button>
        </div>
      </div>
      <div class="list-plane">
        <h2>北京必玩</h2>
        <ul class="list-plane__item">
          <li>故宫上新</li>
          <li>周末去哪儿</li>
          <li>舒适夜晚游</li>
        </ul>
      </div>
      <div class="list-plane">
        <h2>北京热门线路推荐</h2>
        <!--  -->
        <ul class="hots-lines__plane">
          <li>
            无自费
            <img src="../assets/images/noshopping.png" alt srcset />
          </li>
          <li>
            无购物
            <img src="../assets/images/nofee.png" alt srcset />
          </li>
          <li>
            锁定成团
            <img src="../assets/images/tuan.png" alt srcset />
          </li>
        </ul>
      </div>
      <!-- 订单列表组件 -->
      <OrderList />
      <div>{{title}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Col, Row, Button,NavBar, Icon } from "vant";
import OrderList from "../components/orderList";
export default {
  name: "",
  data: () => ({
    goods: {},
    title: ''
  }),
  created() {},
  mounted() {

  },
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Button.name]: Button,
    OrderList,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  methods: {
    asyncData({error}) {
      return axios.get('/api/goods').then(res => {
        // return {title: res.data}
        console.log(res.data)
      }).catch(e => {
        error({ statusCode: 404, message: 'Post not found' })
      })
    }
  }
};
</script>
<style scoped>
.nav-group {
  position: fixed;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
}
.nav-list {
  display: flex;
  align-items: center;
  height: 47px;
  justify-content: space-between;
  border-bottom: solid 1px #ebedf0;
  font-size: 14px;
  padding: 0 10px;
}
.nav-list li {
  color: #616161;
}
.nav-list .from-item {
  background: #f2f2f2;
  border-radius: 22px;
  min-width: 265px;
  border: none;
  text-indent: 28px;
  height: 30px;
  font-size: 12px;
}
.nav-list li >>> .van-icon-arrow-down {
  vertical-align: text-bottom;
}
.search-icons {
  position: absolute;
  margin-top: 9px;
  margin-left: 12px;
}
.jumbtion {
  position: absolute;
  top: 50px;
  left: 15px;
  right: 15px;
}
.list-plane h2 {
  font-size: 18px;
}
.list-plane {
  margin-bottom: 25px;
}
.list-plane__item {
  display: flex;
  justify-content: space-between;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
}
.list-plane__item li {
  height: 50px;
  line-height: 50px;
  flex: 1;
  background: #fff;
  border-right: solid 1px #e0e0e0;
  text-align: center;
  color: #212121;
  font-size: 14px;
}
.list-plane__item li:last-child {
  border-right: transparent;
  border-bottom-right-radius: 10px;
}
.tj-plane__items img {
  display: block;
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
}
.tj-plane__items .title {
  font-size: 14px;
  display: block;
  text-align: center;
  margin: 6px 0;
}
.tj-plane__items .lines {
  font-size: 12px;
  color: #bbb;
  display: block;
  text-align: center;
}
.tj-plane__items .lines em {
  font-size: 12px;
  font-style: normal;
  color: #00cabb;
}
.btn-days {
  color: #00cabb;
  border: 1px solid #95ded5;
  background-color: transparent;
  margin-top: 12px;
  border-radius: 6px;
  height: 40px;
  line-height: 40px;
}
.hots-lines__plane {
  display: flex;
  justify-content: space-between;
}
.hots-lines__plane li {
  height: 50px;
  line-height: 50px;
  text-align: left;
  width: 30%;
  margin-right: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  text-indent: 12px;
  font-size: 14px;
  color: #212121;
  position: relative;
}
.hots-lines__plane li:last-child {
  margin-right: 0;
}
.hots-lines__plane li img {
  position: absolute;
  height: 24px;
  width: 24px;
  bottom: 0;
  right: 0;
}
</style>