<template>
  <div class="main-content page">
    <VenNavbar title="我的"></VenNavbar>
    <div class="page-content">
      <van-button type="success" block @click="logOut">退出登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "My",
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    logOut() {
      this.$store.dispatch("user/_userLogOut");
    },
  },
};
</script>
<style scoped></style>
