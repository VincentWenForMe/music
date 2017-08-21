<template>
  <div class="hot-list">
    <ul class="hot-list-ul">
      <li v-for="item in projects">
        <div class="item-1"><img src="" :src="item.images.large" alt=""></div>
        <div class="item-2">
          <h1>{{item.title}}</h1>
          <div class="intro">
            <div>导演：{{item.directors[0].name}}</div>
            <div>类型：{{String(item.genres)}}</div>
            <div>演员列表</div>
          </div>
          <div class="on-show">24家影院正咋上映</div>
        </div>
        <div class="item-3">{{item.rating.average}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'list',
    /*computed: mapState([
      'projects'
    ]),*/
    data() {
      return {
      
      }
    },
    computed: {
      projects() {
        return this.$store.state.projects;
      },
      str(s) {
        return String(s);
      }
    },
    methods: {
    
    },
  }
</script>

<style lang="scss" type="text/css" scoped>
  @import "hotPost.scss";
</style>
