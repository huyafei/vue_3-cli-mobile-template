<template>
  <div class="main">
    <van-form @submit="onSubmit">
      <van-field
        v-model="formData.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="formData.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import { userLogin } from "@/api";

export default {
  name: "Login",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
      redirectPath: this.$route.query.redirect || "/home",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onSubmit() {
      const res = await this.$store.dispatch("user/_userLogin", this.formData);
      if (res) {
        const _res = await this.$store.dispatch("user/_getUserInfo");
        if (_res) {
          this.$router.replace(this.redirectPath);
        }
      }
    },
  },
};
</script>
<style scoped lang="less"></style>
