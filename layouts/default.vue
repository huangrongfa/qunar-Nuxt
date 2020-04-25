<template>
  <div class="element-content">
    <header>
      <nav class="nav-group">
        <ul class="nav-list">
          <li><van-icon name="arrow-left" size="18"/></li>
          <li><van-icon name="search" color="#333" size="14" class="search-icons"/><input type="text" class="from-item" placeholder="景点/目的地/主题"></li>
          <li>北京<van-icon name="arrow-down" size="18"/></li>
        </ul>
      </nav>
    </header>
    <nuxt />
  </div>
</template>
<script>
import { NavBar, Icon } from 'vant';
export default {
  data() {
    return {

    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  methods: {
    onClickLeft() {},
  }
}
</script>
<style scoped>
.nav-group{
  position:fixed;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
}
.nav-list{
  display: flex;
  align-items: center;
  height: 47px;
  justify-content: space-between;
  border-bottom: solid 1px #ebedf0;
  font-size: 14px;
  padding: 0 10px;
}
.nav-list li{
  color: #616161;
}
.nav-list .from-item{
  background: #f2f2f2;
  border-radius: 22px;
  min-width: 265px;
  border: none;
  text-indent: 28px;
  height: 30px;
  font-size: 12px;
}
.nav-list li >>> .van-icon-arrow-down{
  vertical-align: text-bottom;
}
.search-icons{
  position: absolute;
  margin-top: 10px;
  margin-left: 12px;
}
</style>
