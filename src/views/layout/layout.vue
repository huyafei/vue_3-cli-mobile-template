<script setup>
import { computed, onMounted, watch } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore();
const router = useRouter();
const route = useRoute();


const cachedViews = computed(() => store.state.router.cachedViews);
const key = computed(() => route.path);

watch(
  () => route,
  () => {
    addCachedViews();
  }
);

const addCachedViews = function () {
  const { name } = route;
  if (name) {
    store.dispatch('router/addCachedViews',route);
  }
};
onMounted(() => {
  addCachedViews();
});

</script>
<template>
  <div class="layout">
    <div class="main">
      <router-view v-slot="{ Component }" >
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="key"/>
        </keep-alive>
      </router-view>
    </div>
    <VenTabbar></VenTabbar>
  </div>
</template>

<style scoped lang="less">
.layout {
  height: 100%;

  & > .main {
    height: calc(100% - 50px);
  }
}
</style>
