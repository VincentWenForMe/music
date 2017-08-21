<template>
  <div class="container">
    <div class="sort-list">
      <div class="item">
        <router-link to="/"><span>热映电影</span></router-link>
      </div>
      <div class="item">
        <router-link to="/soon"><span>即将上映</span></router-link>
      </div>
      <div class="item">
        <router-link to="/hotAct"><span>热门活动</span></router-link>
      </div>
    </div>
    <div class="film-show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'container'
  }
</script>

<style type="text/css" lang="scss" scoped>
  @import "container.scss";
</style>
