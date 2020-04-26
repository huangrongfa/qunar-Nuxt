<template>
  <transition name="slider-right">
    <div class="element-content">
      
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  transition: 'slider-right',
  data: () => ({}),
  created() {},
  mounted() {},
  components: {},
  methods: {}
};
</script>
<style scoped>
.element-content{
  position: fixed;
  top: 48px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: #fff;
}
.slider-right-enter-active,.slider-right-leave-active{
  transition: transform .3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.slider-right-enter,.slider-right-leave-to{
  transform: translateX(100%);
}
</style>