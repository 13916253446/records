<template>
  <div>
    <van-tabs v-model="activeTab" sticky animated swipeable :ellipsis="false">
      <van-tab :title="module.title" v-for="(module, idx) in List" :key="idx">
        <van-cell-group>
          <van-cell @click="$router.push({ path: view.path || '/' })" class="ellipsis2" v-for="(view, viewIdx) in module.views" :key="viewIdx" :title="view.title" :label="view.introduction" />
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs, Cell, CellGroup } from 'vant'
import List from '../config/module-list.json'
export default {
  name: 'Home',
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  },
  data () {
    return {
      activeTab: 0,
      List
    }
  }
}
</script>

<style lang="stylus" scoped>
.ellipsis2 >>> .van-cell__label
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow : hidden !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
</style>
