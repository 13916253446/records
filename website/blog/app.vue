<template>
    <div class="page-container">
      <md-app>
        <!-- header -->
        <md-app-toolbar class="md-primary" md-elevation="0">
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">My Title</span>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
          <md-toolbar class="md-transparent" md-elevation="0">
            <span>Navigation</span>

            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button md-dense" @click="toggleMenu">
                <md-icon>keyboard_arrow_left</md-icon>
              </md-button>
            </div>
          </md-toolbar>

          <md-list>
            <md-list-item v-for="(module, index) in routes" :key="`module${index}`">
              <svgs class="menu-icon" :name="module.icon" v-show="!menuVisible"></svgs>
              <div class="md-layout md-gutter" v-show="menuVisible">
                <div class="md-layout-item">
                  <md-field>
                    <label for="movie">
                      <span class="md-list-item-text">{{module.module}}</span>
                    </label>
                    <md-select @md-selected="selectPage" v-model="thePage">
                      <md-option v-for="(page, indexs) in module.pages" :key="`page${indexs}`" :value="`/${module.module}/${page.name}`.toUpperCase()">{{page.title}}</md-option>
                    </md-select>
                  </md-field>
                </div>
              </div>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </md-app-content>
      </md-app>
    </div>
</template>

<script>
import routes from './config/routes.json'
export default {
  name: 'App',
  data: () => ({
    menuVisible: false,
    routes,
    thePage: ''
  }),
  watch: {
    //? 监听当前路由变化，设置选中的菜单项
    $route: {
      handler ({ path }) {
        this.thePage = path.toUpperCase()
        console.log(this.thePage)
      },
      immediate: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    },
    //? 选择页面
    selectPage (path) {
      if (!path) return false
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu-icon
  width 30px
  height 30px
  margin-right 32px
  min-width 30px
.md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
