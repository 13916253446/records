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

              <div class="md-layout md-gutter">
                <div class="md-layout-item">
                  <md-field>
                    <label for="movie">
                      <span class="md-list-item-text">{{module.module}}</span>
                    </label>
                    <md-select v-model="movie" name="movie" id="movie">
                      <md-option value="fight-club">Fight Club</md-option>
                      <md-option value="godfather">Godfather</md-option>
                      <md-option value="godfather-ii">Godfather II</md-option>
                      <md-option value="godfather-iii">Godfather III</md-option>
                      <md-option value="godfellas">Godfellas</md-option>
                      <md-option value="pulp-fiction">Pulp Fiction</md-option>
                      <md-option value="scarface">Scarface</md-option>
                    </md-select>
                  </md-field>
                </div>
              </div>
              <!-- <svgs class="menu-icon" :name="module.icon"></svgs>
              <span class="md-list-item-text">{{module.module}}</span> -->
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
    routes
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
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
