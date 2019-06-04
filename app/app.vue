<template>
  <div :class="$route.path !== '/' ? 'page-wrapper' : ''">
    <router-view></router-view>
  </div>
</template>

<style lang="stylus" scoped>
.page-wrapper
  padding 0 20px
  *
    overflow auto
</style>
